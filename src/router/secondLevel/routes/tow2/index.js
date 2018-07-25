module.exports = {
  path: 'tow2',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/secondLevel/tow2').default)
    })
  },
}