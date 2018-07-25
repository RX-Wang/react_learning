module.exports = {
  path: 'secondLevel',
  getChildRoutes(partialNextState, cb) {
    require.ensure([], (require) => {
      cb(null, [
        require('./routes/tow1'),
        require('./routes/tow2'),
        require('./routes/tow3'),
      ])
    })
  },
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/secondLevel').default)
    })
  },
}