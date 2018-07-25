module.exports = {
  path: 'ReactRefs',
  getComponent(nextState, cb) {
    require.ensure([], (require) => {
      cb(null, require('@component/react-refs').default)
    })
  }
}