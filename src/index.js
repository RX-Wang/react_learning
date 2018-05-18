import React from 'react';
import ReactDOM from 'react-dom';
// import qzx from '@img/qzx.jpeg';
import JSX from '@component/jsx';
import Events from '@component/events';
import Conditional from '@component/conditional';
import Form1 from '@component/form/form1';
import ReactSortable from '@component/react-sortable';
import SortableExampleEsnext from '@component/react-sortable/sortablejs'
import SortableComponent from '@component/react-sortable/react-sortable-hoc'
import AnythingSortable from '@component/react-sortable/react-anything-sortable'
import ReactRefs from './component/react-refs';

import '@css/index.css';


ReactDOM.render(
  // <JSX />,
  // <Events />,
  // <Conditional />,
  // <Form1 />,
  // <ReactSortable />,
  // <SortableExampleEsnext />,
  // <SortableComponent />,
  // <AnythingSortable />,
  <ReactRefs />,
  document.getElementById('app')
);