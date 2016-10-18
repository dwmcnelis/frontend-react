if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'clients',
    getComponents (location, cb) {
      require.ensure([
        './containers/ClientIndex'
      ], (require) => {
        let ClientIndex = require('./containers/ClientIndex').default
        cb(null, ClientIndex)
      })
    }
  }
}
