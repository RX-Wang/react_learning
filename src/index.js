import React from 'react';
import ReactDOM from 'react-dom';
import { Router, hashHistory } from 'react-router'
import '@css/index.css';


const rootRoute = {
  path: '/',
  indexRoute: {
    getComponent(nextState, cb) {
      require.ensure([], (require) => {
        cb(null, require('@component/App/App').default)
      }, 'AppPage')
    },
  },
  // getComponent(nextState, cb) {
  //   require.ensure([], (require) => {
  //     cb(null, require('components/Main'))
  //   }, 'Main')
  // },
  childRoutes: [
    require('./router/Jsx'),
    require('./router/Events'),
    require('./router/Conditional'),
    require('./router/JormOne'),
    require('./router/ReactSortable'),
    require('./router/SortableExampleEsnext'),
    require('./router/SortableComponent'),
    require('./router/AnythingSortable'),
    require('./router/ReactRefs'),
    require('./router/secondLevel/index'),
  ]
}

ReactDOM.render(
  // <GetRouter/>,
  <Router
    history={hashHistory}
    routes={rootRoute}
  />,
  document.getElementById('app')
);