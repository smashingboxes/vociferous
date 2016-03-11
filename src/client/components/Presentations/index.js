// Imports
import React, { Component, PropTypes } from 'react';
import { Link, hashHistory as history } from 'react-router';
// import deepstream from 'deepstream.io-client-js';

/*
  Presentations
  <Presentations/>
*/

class Presentations extends Component {
  constructor() {
    super();

    this.state = {
      pid: 'scotch-cigars-victory'
    };
  }

  viewPresentation(e) {
    e.preventDefault();
    history.push(`${this.props.location.pathname}/${this.state.pid}`);
  }

  presentPresentation(e) {
    e.preventDefault();
    history.push(`${this.props.location.pathname}/${this.state.pid}/present`);
  }

  render() {
    return (
      <div className="presentations">
        <nav>
          <Link to="/">Logout</Link>
        </nav>
        <h1>Presentations</h1>
        <ul>
          <li>
            <span>{this.state.pid}</span>
            <button onClick={this.viewPresentation.bind(this)}>View Presentation</button>
            <button onClick={this.presentPresentation.bind(this)}>Present Presentation</button>
          </li>
        </ul>
      </div>
    );
  }
}

export default Presentations;
