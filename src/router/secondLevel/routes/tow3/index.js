module.exports = {
  path: 'tow3',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/secondLevel/tow3').default)
    })
  },
}