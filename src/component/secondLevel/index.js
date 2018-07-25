import React from 'react';
import {Link} from 'react-router';

export default class SecondLevel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div tabIndex="1">
        <h1>二级+++++</h1>
        <Link to="secondLevel/tow1"> 二级1.....</Link>|
        <Link to="secondLevel/tow2"> 二级2.....</Link>|
        <Link to="secondLevel/tow3"> 二级3.....</Link>
        {this.props.children}
      </div>
    );
  }
}