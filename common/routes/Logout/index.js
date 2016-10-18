if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'logout',
    getComponents (location, cb) {
      require.ensure([
        './containers/Logout'
      ], (require) => {
        let Logout = require('./containers/Logout').default
        cb(null, Logout)
      })
    }
  }
}
