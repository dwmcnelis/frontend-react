if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'posts',
    getComponents (location, cb) {
      require.ensure([
        './containers/PostIndex'
      ], (require) => {
        let PostIndex = require('./containers/PostIndex').default
        cb(null, PostIndex)
      })
    }
  }
}
