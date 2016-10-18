if (typeof require.ensure !== 'function') require.ensure = (d, c) => c(require)

export default function createRoutes (store) {
  return {
    path: 'post/:slug',
    getComponents (location, cb) {
      require.ensure([
        './containers/PostShow'
      ], (require) => {
        let PostShow = require('./containers/PostShow').default
        cb(null, PostShow)
      })
    }
  }
}
