import React, { Component } from "react";

class UserFake extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0
    };
    this.incrementCount.bind(this);
  }

  incrementCount = () => {
    this.setState((prevState, props) => ({
      count: prevState.count + 1
    }));
    this.setState((prevState, props) => ({
      count: prevState.count + 2
    }));
  };
  render() {
    return (
      <div>
        <button onClick={this.incrementCount}>Increment</button>
        <div>{this.state.count}</div>
      </div>
    );
  }
}

export default UserFake;
