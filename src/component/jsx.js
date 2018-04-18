import React from 'react';

export default class JSX extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div tabIndex="1" className="greeting">
        <h1>hello webpack!!~~~~~!</h1>
      </div>
    );
  }
}