import React from 'react';

export default class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '你好',
      selectValue: 'mango'
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSelectChange = this.handleSelectChange.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSelectChange(event) {
    this.setState({selectValue: event.target.value});
  }

  handleSubmit(event) {
    alert('A name was submitted: ' + this.state.value);
    event.preventDefault();
  }

  emptyFunc = () => {

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
          <div>
            <textarea value={this.state.value} onChange={this.emptyFunc}/>
          </div>
        </label>
        <input type="submit" value="Submit" />
        <label>
          Pick your favorite La Croix flavor:
          <select value={this.state.selectValue} onChange={this.handleSelectChange}>
            <option value="grapefruit">Grapefruit</option>
            <option value="lime">Lime</option>
            <option value="coconut">Coconut</option>
            <option value="mango">Mango</option>
          </select>
          <div>
            <textarea value={this.state.selectValue} onChange={this.emptyFunc}/>
          </div>
        </label>
      </form>
    );
  }
}