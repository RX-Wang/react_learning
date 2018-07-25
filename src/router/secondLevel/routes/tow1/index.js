module.exports = {
  path: 'tow1',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/secondLevel/tow1').default)
    })
  },
}