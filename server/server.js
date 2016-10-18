import { getEnv, isDev, isTest, isProduction } from '../common/env'
import dotenv from 'dotenv'
import path from 'path'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import hpp from 'hpp'
import proxy from 'express-http-proxy'
import cookie from 'cookie'
import { parseToken } from '../common/token'
import React from 'react'
import ReactDOM from 'react-dom/server'
import Helm from 'react-helmet'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { jss } from '../common/styles/jss'
import axios from 'axios'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import { configureStore } from '../common/store'
import { initialState } from '../common/initialState'
import { authSet } from '../common/redux/auth/actions'
import { setOrigin } from '../common/redux/origin/actions'
import reducer from '../common/createReducer'
import createRoutes from '../common/routes/root'
import url from 'url'
import chalk from 'chalk'

injectTapEventPlugin()

// Environment/Configuration
console.log('env', getEnv())
dotenv.config({path: `.env.${getEnv()}`})
let frontendUrl = url.parse(process.env['FRONTEND_URL'] || 'http://0.0.0.0:5000')
const frontend = {
  protocol: frontendUrl.protocol.replace(':',''),
  hostname: frontendUrl.hostname,
  port: frontendUrl.port
}
console.log('frontend', frontend)
let backendUrl = url.parse(process.env['BACKEND_URL'] || 'http://localhost:3001')
const backend = {
  protocol: backendUrl.protocol.replace(':',''),
  hostname: backendUrl.hostname,
  port: backendUrl.port
}
console.log('backend', backend)
let token_secret = process.env['TOKEN_SECRET']
console.log('token_secret', token_secret)

const server = express()
let assets
server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

if (isProduction() || isTest()) {
  const config = require('../webpack/webpack.client.prod')
  server.use(morgan('combined'))
  server.use(helmet())
  server.use(hpp())
  server.use(compression())
  assets = require('../assets.json')
} else {
  server.use(morgan('dev'))
  const config = require('../webpack/webpack.client.dev')
  const fbDX = require('../tools/fbDX')
  const webpack = require('webpack')
  const webpackDevMiddleware = require('webpack-dev-middleware')
  const webpackHotMiddleware = require('webpack-hot-middleware')
  const compiler = fbDX.compileDev((webpack(config)))
  server.use(webpackDevMiddleware(compiler, { quiet: true }))
  server.use(webpackHotMiddleware(compiler, { log: console.log }))
}
server.use(express.static('public'))
server.use('/api/v0/posts', require('./api/posts'))

server.use('/api/v1', proxy(`${backend.protocol}://${backend.hostname}:${backend.port}`, {
  forwardPath: function(req, res) {
    console.log(`${req.method} /api/v1${req.path} <- ${req.method} ${backend.protocol}://${backend.hostname}:${backend.port}/api/v1${req.path}`)
    return `/api/v1${req.path}`
  },
  intercept: function(rsp, data, req, res, callback) {
    let serialized = cookie.serialize('token', '_', {
      path: '/',
      httpOnly: true,
      expires: new Date(0)
    })
    let auth_json = {user: {}, expires: 0}
    if (res.statusCode == 200 || res.statusCode == 201) {
      const body = JSON.parse(data.toString('utf8'))
      const token = body.token || null
      const parsed = parseToken(token, token_secret)
      const { exp, ...rest } = parsed.payload
      serialized = cookie.serialize('token', token, {
        path: '/',
        httpOnly: true,
        expires: exp ? new Date(exp) :new Date()
      })
      if (parsed.valid) {
        auth_json = {user: {id: rest.uid, grants: {}}, expires: exp}
      }
    }
    if (req.path === '/authorize') {
      data = JSON.stringify(auth_json)
    }
    res.setHeader('Set-Cookie', serialized);
    console.log(`inject Set-Cookie: ${serialized}`)

    callback(null, data)
  },
  decorateRequest: function(proxyReq, originalReq) {
    const cookies = cookie.parse(originalReq.headers.cookie || '')
    const token = cookies.token
    const serialized = originalReq.headers['cookie']
    if (serialized) {
      console.log(`delete Cookie: ${serialized}`)
      delete proxyReq.headers['cookie']
    }
    if (token) {
      proxyReq.headers['authorization'] = `Bearer ${token}`
      console.log(`inject Authorization: Bearer ${token}`)
    }
    return proxyReq
  }
}))

server.get('*', (req, res) => {
  const protocol = req.headers['x-forwarded-proto'] || req.protocol
  const host = req.headers.host

  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  const cookies = cookie.parse(req.headers.cookie || '')
  const token = cookies.token
  const parsed = parseToken(token, token_secret)
  const { exp, ...rest } = parsed.payload
  let user = {}
  if (parsed.valid) {
    user = {id: rest.uid, grants: {}}
  }

  axios.defaults.headers.common['Authorization'] = `Bearer ${token}`

  const store = configureStore(initialState, axios)

  const routes = createRoutes(store)
  const history = syncHistoryWithStore(createMemoryHistory(req.originalUrl), store)
  const { dispatch, getState } = store

  dispatch(setOrigin(protocol, host))
  dispatch(authSet(user, exp))

  // Match routes based on history object:
  match({ routes, history}, (err, redirectLocation, renderProps) => {
    if (err) {
      console.error(err)
      return res.status(500).send('Internal server error')
    }

    if (!renderProps) {
      return res.status(404).send('Not found')
    }

    const { components } = renderProps

    // Define locals to be provided to all lifecycle hooks:
    const locals = {
      path: renderProps.location.pathname,
      query: renderProps.location.query,
      params: renderProps.params,

      // Allow lifecycle hooks to dispatch Redux actions:
      dispatch
    }

    // Wait for async data fetching to complete, then render:
    trigger('fetch', components, locals)
      .then(() => {
        const state = getState()
        const InitialView = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        const html = ReactDOM.renderToString(InitialView)
        const css = jss.sheets.toString()
        const head = Helm.rewind()

        res.status(200).send(`
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charSet="utf-8">
              <meta httpEquiv="X-UA-Compatible" content="IE=edge">
              ${head.title.toString()}
              <meta name="viewport" content="width=device-width, initial-scale=1">
              <link rel="shortcut icon" href="/favicon.ico">
              ${head.meta.toString()}
              ${head.link.toString()}
              <style>
                html {
                  box-sizing: border-box
                }

                *,
                *::before,
                *::after {
                  box-sizing: border-box
                }

                html {
                  font-size: 100%;
                  -ms-overflow-style: scrollbar;
                  -webkit-tap-highlight-color: rgba(0,0,0,0);
                  height: 100%;
                }

                body {
                  font-size: 1rem;
                  background-color: #fff;
                  color: #555;
                  -webkit-font-smoothing: antialiased;
                  -moz-osx-font-smoothing: grayscale;
                  font-family: -apple-system,BlinkMacSystemFont,"Helvetica Neue",Helvetica,Arial,sans-serif;
                }

                h1,h2,h3,h4,h5,h6 {
                  margin: 0;
                  padding: 0;
                }

                pre {
                  font-size: 90%;
                  margin: 0;
                  background-color: #F1F1F1;
                  counter-reset: line-numbering;
                  font-family: Consolas, Menlo, Monaco, monospace;
                  padding: 5px;
                  border-radius: 3px 10px 3px 10px;
                  color: #558B2F;
                  white-space: pre-wrap;
                  word-wrap: break-word;
                }
                pre .line::before {
                  content: counter(line-numbering);
                  counter-increment: line-numbering;
                  padding-right: 1em;
                  /* space after numbers */
                  width: 1.5em;
                  text-align: right;
                  font-weight: 600;
                  font-size: 12px;
                  color: #616161;
                }

                .barbutton {
                  font-size: 12px;
                  font-weight: bold;
                  margin-right: 8px;
                  min-width: 56px;
                  height: 28px!important;
                  text-transform: capitalize;
                }

                .yellowy {
                  background-color: yellow ! important;
                }

                .orangey {
                  background-color: orange ! important;
                }

                .cyany {
                  background-color: cyan ! important;
                }
              </style>
              <style type="text/css" id="server-side-styles">
                ${css}
              </style>
            </head>
            <body>
              <div id="root">${html}</div>
              <script>window.INITIAL_STATE = ${JSON.stringify(state)};</script>
              <script src="${ isProduction() ? assets.vendor.js : '/vendor.js' }"></script>
              <script async src="${ isProduction() ? assets.app.js : '/app.js' }" ></script>
            </body>
          </html>
        `)

      }).catch(e => console.log(e))
  })

})

server.listen(frontend.port, frontend.hostname, (err) => {
  if (isProduction() || isTest()) {
    console.log(chalk.cyan('Starting production application....'))
  } else {
    require('../tools/fbDX').listen(frontend.port, err)
  }
  console.log(chalk.dim.cyan(`Frontend listening on ${frontend.protocol}://${frontend.hostname}:${frontend.port}`))
  console.log(chalk.dim.cyan(`Proxying API to ${backend.protocol}://${backend.hostname}:${backend.port}`))
})

module.exports = server
