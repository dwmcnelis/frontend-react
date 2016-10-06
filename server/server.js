import path from 'path'
import express from 'express'
import helmet from 'helmet'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import hpp from 'hpp'

import injectTapEventPlugin from 'react-tap-event-plugin'
injectTapEventPlugin()

import React from 'react'
import ReactDOM from 'react-dom/server'
import { createMemoryHistory, RouterContext, match } from 'react-router'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import { fromJS } from 'immutable'
import { configureStore } from '../common/store'
import Helm from 'react-helmet' // because we are already using helmet
import reducer from '../common/createReducer'
import createRoutes from '../common/routes/root'
import { jss } from '../common/styles/jss'

const __PROD__ = process.env.NODE_ENV === 'production'
const __TEST__ = process.env.NODE_ENV === 'test'
const port = process.env.PORT || 5000
const server = express()
let assets
server.disable('x-powered-by')
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: true }))

if (__PROD__ || __TEST__) {
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

server.get('*', (req, res) => {

  global.navigator = global.navigator || {};
  global.navigator.userAgent = req.headers['user-agent'] || 'all';

  const store = configureStore(fromJS({
    sourceRequest: {
      protocol: req.headers['x-forwarded-proto'] || req.protocol,
      host: req.headers.host
    }
  }))
  const routes = createRoutes(store)
  const history = createMemoryHistory(req.originalUrl)
  const { dispatch } = store

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

    trigger('fetch', components, locals)
      .then(() => {
        const initialState = store.getState()
        const InitialView = (
          <Provider store={store}>
            <RouterContext {...renderProps} />
          </Provider>
        )

        // just call html = ReactDOM.renderToString(InitialView)
        // to if you don't want Jss. Also change renderFullPage
        // accordingly
        const html = ReactDOM.renderToString(InitialView)
        const css = jss.sheets.toString()
        // res.status(200).send(html)
        // const data = StyleSheetServer.renderStatic(
        //   () => ReactDOM.renderToString(InitialView)
        // )
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
              <script>window.INITIAL_STATE = ${JSON.stringify(initialState)};</script>
              <script src="${ __PROD__ ? assets.vendor.js : '/vendor.js' }"></script>
              <script async src="${ __PROD__ ? assets.app.js : '/app.js' }" ></script>
            </body>
          </html>
        `)
      }).catch(e => console.log(e))
  })

})

server.listen(port, '0.0.0.0', (err) => {
  if (__PROD__ || __TEST__) {
    console.log('Starting production application....')
  } else {
    require('../tools/fbDX').listen(port, err)
  }
})


module.exports = server
