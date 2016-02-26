// Imports
import React, { Component } from 'react';
import { hashHistory as history } from 'react-router';

/*
  Presentations
  <Presentations/>
*/

class Presentations extends Component {
  constructor() {
    super();

    this.state = {
      pid: 'wordisbon',
      slides: []
    };
  }

  selectPresentation(e) {
    e.preventDefault();
    history.push(`${this.props.location.pathname}/${this.state.pid}`);
  }

  render() {
    return (
      <div className="slide">
        <div className="message">
          <h1>Not Found!</h1>
          <button onClick={this.selectPresentation.bind(this)}>Presentation 1</button>
        </div>
      </div>
    );
  }
}

export default Presentations;
