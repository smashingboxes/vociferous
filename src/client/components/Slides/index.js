// Imports
import React, { Component } from 'react';

/*
  Slides
  <Slides/>
*/

class Slides extends Component {
  render() {
    return (
      <div className="slide">
        {this.props.children}
      </div>
    );
  }
}

Slides.propTypes = {
  children: React.PropTypes.node.isRequired
};

export default Slides;
