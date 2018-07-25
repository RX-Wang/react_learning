module.exports = {
  path: 'AnythingSortable',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/react-sortable/react-anything-sortable').default)
    })
  }
}