module.exports = {
  path: 'JormOne',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/form/form1').default)
    })
  }
}