import React from 'react';
import EventsChild from './events-child';

export default class Events extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'Diana',
      sex: 'female'
    };

    // 为 函数 绑定this
    this.handleClick1 = this.handleClick1.bind(this);
  }
  // 1、需要 在constructor中进行 this 的绑定
  handleClick1() {
    alert(`name is : ${this.state.name}`);
  }
  /**
   *  2、不需要 绑定 this，不过这属于 实验写法。需要配合：
   *  @babel/plugin-proposal-class-properties 包 来使用。
   *  在 .babelrc 中配置：
   *    {
          "plugins": ["@babel/plugin-proposal-class-properties"]
        }
   */
  handleClick2 = () => {
    alert(`name is : ${this.state.name}`);
  }

  /**
   *  3.1、回调函数传参,通过 bind(this,params,..)方法， evenet 永远被默认放在形参的最后一个
   */
  handleClick3 (name, sex, e) {
    console.log(e);
    alert(`${name} + ${sex}`);
  }
  /**
   *  3.2、回调函数传参,通过 箭头函数方法， evenet 可以被显式传递，随便放那个位置都行
   */
  handleClick4 (e, name, sex) {
    console.log(e);
    alert(`${name} + ${sex}`);
  }
  eventsChildClickHandle(favorite, e) {
    console.log(e.target.innerText);
    alert(favorite);
  }
  render() {
    return (
      <div>
        <button onClick={this.handleClick1}>
          Click me1
        </button>
        <button onClick={this.handleClick2}>
          Click me2
        </button>
        <button onClick={this.handleClick3.bind(this, this.state.name, this.state.sex)}>
          Click me3
        </button>
        <button onClick={
            (e) => this.handleClick4(e, this.state.name, this.state.sex)
          }
        >
          Click me4
        </button>
        <EventsChild 
          clickHandle={this.eventsChildClickHandle}
        />
      </div>
    );
  }
}