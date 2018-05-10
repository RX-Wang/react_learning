/**
 * 条件渲染
 */

import React from 'react';

function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning!
    </div>
  );
}

export default class Conditional extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showWarning: true}
    this.handleToggleClick = this.handleToggleClick.bind(this);
  }

  handleToggleClick() {
    // 下面俩写法都行
    /* this.setState(prevState => ({
      showWarning: !prevState.showWarning
    })); */
    this.setState({
      showWarning: !this.state.showWarning
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
        <WarningBanner warn={this.state.showWarning} />
      </div>
    );
  }
}