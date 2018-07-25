module.exports = {
  path: 'SortableComponent',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/react-sortable/react-sortable-hoc').default)
    })
  }
}