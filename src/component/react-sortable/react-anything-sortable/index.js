import React, {Component} from 'react';
import Sortable from 'react-anything-sortable';

import DemoItem from './DemoItem';
export default class Dynamic extends React.Component {
  constructor() {
    super();
    this.state = {
      arr: [998, 225, 13]
    };
  }

  handleSort = (sortedArray) =>{
    this.setState({
      arr: sortedArray
    });
  }

  handleAddElement = () => {
    this.setState({
      arr: this.state.arr.concat(Math.round(Math.random() * 1000))
    });
  }

  handleRemoveElement = (index) => {
    const newArr = this.state.arr.slice();
    newArr.splice(index, 1);

    this.setState({
      arr: newArr
    });
  }

  render() {
    function renderItem(num, index) {
      return (
        <DemoItem key={num} className="dynamic-item" sortData={num}>
          {num}
        </DemoItem>
      );
    }

    return (
      <div className="demo-container">
        <div className="dynamic-demo">
          <button onClick={this.handleAddElement}>Add 1 element</button>
          <Sortable onSort={this.handleSort} dynamic>
            {this.state.arr.map(renderItem, this)}
          </Sortable>
        </div>
      </div>
    );
  }
}