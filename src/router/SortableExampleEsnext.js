module.exports = {
  path: 'SortableExampleEsnext',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/react-sortable/sortablejs').default)
    })
  }
}