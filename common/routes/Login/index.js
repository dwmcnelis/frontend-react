if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'login',
    getComponents (location, cb) {
      require.ensure([
        './containers/Login'
      ], (require) => {
        let Login = require('./containers/Login').default
        cb(null, Login)
      })
    }
  }
}
