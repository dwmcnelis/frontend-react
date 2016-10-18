// polyfill webpack require.ensure
if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

import App from '../components/App'
import Home from './Home'

export default function createRoutes (store) {
  const root = {
    path: '/',
    component: App,
    getChildRoutes (location, cb) {
      require.ensure([], (require) => {
        cb(null, [
          require('./PostIndex').default(store),
          require('./PostShow').default(store),
          require('./ClientIndex').default(store),
          require('./Login').default(store),
          require('./Logout').default(store),
          require('./NotFound').default
        ])
      })
    },

    indexRoute: {
      component: Home
    }
  }

  return root
}
