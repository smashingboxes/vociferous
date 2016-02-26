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
      pid: 'wordisbon'
    };
  }

  viewPresentation(e) {
    e.preventDefault();
    history.push(`${this.props.location.pathname}/${this.state.pid}`);
  }

  editPresentation(e) {
    e.preventDefault();
    history.push(`${this.props.location.pathname}/${this.state.pid}/edit`);
  }

  render() {
    return (
      <div className="slide">
        <div className="message">
          <h1>Not Found!</h1>
          <button onClick={this.viewPresentation.bind(this)}>View Presentation</button>
          <button onClick={this.editPresentation.bind(this)}>Edit Presentation</button>
        </div>
      </div>
    );
  }
}

export default Presentations;
