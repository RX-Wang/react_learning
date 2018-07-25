import React, { Component } from 'react';
import {Link} from 'react-router';
import logo     from '../../logo.svg';
import '@component/App/App.css';

const disBlock = {display : "inline-block",margin:"20px 20px 20px 5px"};
class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
            To get started, edit
                <code> src/App.js </code>
            and save to reload.
        </p>
          <ul>
              <li>
                  <Link to="JSX">JSX</Link>
              </li>
              <li>
                  <Link to="/Events">Events</Link>
              </li>
              <li>
                  <Link to="/Conditional">Conditional</Link>
              </li>
              <li>
                  <Link to="/JormOne">FormOne</Link>
              </li>
          </ul>
          <Link style={disBlock} to="/ReactSortable">ReactSortable</Link>
          {/*redux 示例*/}
          <Link style={disBlock} to="/SortableExampleEsnext">SortableExampleEsnext</Link>
          {/*生命周期 示例*/}
          <Link style={disBlock} to="/SortableComponent">SortableComponent</Link>
          {/*学习 示例*/}
          <Link style={disBlock} to="/AnythingSortable">AnythingSortable</Link>
          {/*学习 示例*/}
          <Link style={disBlock} to="/ReactRefs">ReactRefs</Link>
          <Link style={disBlock} to="/secondLevel">测试二级路由</Link>
      </div>
    );
  }
}

export default App;
