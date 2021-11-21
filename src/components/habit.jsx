import React, { Component } from "react";


export default class Habit extends Component {
    state = {
        count: 0,
    };

    handleIncrement = () => {
        // state 오브젝트 안 count 를 증가 한뒤 state 를 업데이트
        this.setState({count: this.state.count + 1});
    };
    handleDecrement = () => {
        // count 가 0보다 작으면 그대로 0을 출력하고 아니면 그냥 count를 출력
        const count = this.state.count -1 ;
        this.setState({ count: count < 0 ? 0 : count});
    };
  render() {
    return (
      <li className="habit">
        <span className="habit-name">Reading</span>
        <span className="habit-count">{this.state.count}</span>
        <button className="habit-button habit-increase" onClick={this.handleIncrement}>
            <i className="fas fa-plus-square"></i>
        </button>
        <button className="habit-button habit-decrease" onClick={this.handleDecrement}>
            <i className="fas fa-minus-square"></i>
        <button className="habit-button habit-delete">
            <i className="fas fa-trash"></i>
        </button>
        </button>
      </li>
    );
  }
}
