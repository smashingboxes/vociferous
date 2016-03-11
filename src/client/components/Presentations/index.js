// Imports
import React, { Component, PropTypes } from 'react';
import { hashHistory as history } from 'react-router';
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
      <div className="slide">
        <div className="message">
          <h1>Presentation</h1>
          <button onClick={this.viewPresentation.bind(this)}>View Presentation</button>
          <button onClick={this.presentPresentation.bind(this)}>Present Presentation</button>
        </div>
      </div>
    );
  }
}

export default Presentations;
