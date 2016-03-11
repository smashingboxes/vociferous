// Imports
import React, { Component } from 'react';
import { hashHistory as history } from 'react-router';

/*
  Login
  <Login/>
*/

class Login extends Component {
  constructor() {
    super();

    this.state = {
      uid: 'churchill'
    };
  }

  login(e) {
    e.preventDefault();
    history.push(`/${this.state.uid}`);
  }

  render() {
    return (
      <div className="slide">
        <div className="message">
          <h1>Login!</h1>
          <button onClick={this.login.bind(this)}>Not Yet.</button>
        </div>
      </div>
    )
  }
}

export default Login;
