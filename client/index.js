import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'
import Router from 'react-router/lib/Router'
import match from 'react-router/lib/match'
import browserHistory from 'react-router/lib/browserHistory'
import { syncHistoryWithStore } from 'react-router-redux'
import injectTapEventPlugin from 'react-tap-event-plugin'
import { Provider } from 'react-redux'
import { trigger } from 'redial'
import axios from 'axios'
import { configureStore } from '../common/store'

injectTapEventPlugin()

const initialState = window.INITIAL_STATE || {}

const store = configureStore(initialState, axios)
const { dispatch } = store

const history = syncHistoryWithStore(browserHistory, store)

const container = document.getElementById('root')

const render = () => {
  const { pathname, search, hash } = window.location
  const location = `${pathname}${search}${hash}`

  // We need to have a root route for HMR to work.
  const createRoutes = require('../common/routes/root').default
  const routes = createRoutes(store)


  // Pull child routes using match. Adjust Router for vanilla webpack HMR,
  // in development using a new key every time there is an edit.
  match({ routes, location }, () => {
    if (window.INITIAL_STATE) {
      store.getState().routing.locationBeforeTransitions = initialState.routing.locationBeforeTransitions
    }
    // Render app with Redux and router context to container element.
    // We need to have a random in development because of `match`'s dependency on
    // `routes.` Normally, we would want just one file from which we require `routes` from.
    ReactDOM.render(
      <Provider store={store}>
        <Router routes={routes} history={history} key={Math.random()} />
      </Provider>,
      container, () => {
        const styles = document.getElementById('server-side-styles')
        styles && styles.parentNode.removeChild(styles)
      }
    )
  })

  return browserHistory.listen(location => {
    // Match routes based on location object:
    match({ routes, location }, (error, redirectLocation, renderProps) => {
      if (error) console.log(error)
      // Get array of route handler components:
      const { components } = renderProps

      // Define locals to be provided to all lifecycle hooks:
      const locals = {
        path: renderProps.location.pathname,
        query: renderProps.location.query,
        params: renderProps.params,

        // Allow lifecycle hooks to dispatch Redux actions:
        dispatch
      }

      // Don't fetch data for initial route, server has already done the work:
      if (window.INITIAL_STATE) {
        // Delete initial data so that subsequent data fetches can occur:
        delete window.INITIAL_STATE
      } else {
        // Fetch mandatory data dependencies for 2nd route change onwards:
        trigger('fetch', components, locals)
      }

      // Fetch deferred, client-only data dependencies:
      trigger('defer', components, locals)
    })
  })
}

const unsubscribeHistory = render()

if (module.hot) {
  module.hot.accept('../common/routes/root', () => {
    unsubscribeHistory()
    setTimeout(render)
  })
}
