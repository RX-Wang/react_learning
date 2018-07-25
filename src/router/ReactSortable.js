module.exports = {
  path: 'ReactSortable',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/react-sortable').default)
    })
  }
}