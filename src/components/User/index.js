import React, { Component } from 'react';
export default class User extends Component {
  handleLogin = () => {
    this.props.login('ABC');
  };
  render() {
    return (
      <div>
        <p>Hello {this.props.userName}</p>
        <button onClick={this.handleLogin}>Change</button>
      </div>
    );
  }
}
