// Imports
import React, { Component } from 'react';

// Components
import Slide from '../Slide';

/*
  Presentation
  <Presentation/>
*/

class Presentation extends Component {
  constructor() {
    super();

    this.state = {
      slides: []
    }
  }

  render() {
    return (
      <div className="slide">
        <Slide />
      </div>
    );
  }
}

export default Presentation;
