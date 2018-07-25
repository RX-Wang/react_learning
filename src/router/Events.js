module.exports = {
  path: 'Events',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/Events').default)
    })
  }
}