module.exports = {
  path: 'Conditional',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/Conditional').default)
    })
  }
}