module.exports = {
  path: 'JSX',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/jsx').default)
    })
  }
}