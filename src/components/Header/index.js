import React, { Component } from 'react';
import './style.css';
export default class Header extends Component {
  render() {
    return (
      <div className="header">
        <h3>HH:MM</h3>
        <p>DD MM YYYY</p>
        <h3>LOGO</h3>
      </div>
    );
  }
}
