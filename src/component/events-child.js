import React from 'react';
import PropTypes from 'prop-types';

export default class EventsChild extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      favorite: 'Reading'
    };
  }
  static propTypes = {
    clickHandle: PropTypes.func,
  };
  
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandle.bind(this, this.state.favorite)}>
          你点我啊！
        </button>
      </div>
    );
  }
}