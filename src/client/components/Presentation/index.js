// Imports
import React, { Component } from 'react';

// Components
import Slide from '../Slide';

// Temp Data
// import temp

/*
  Presentation
  <Presentation/>
*/

class Presentation extends Component {
  constructor() {
    super();

    this.state = {
      active: 0,
      slides: [
        {
          id: 1,
          order: 2,
          title: 'Scotch',
          subtitle: 'Scotchy scotch scotch, I love scotch',
          img: 'http://www.gentlemansgazette.com/wp-content/uploads/2014/02/Drinking-Scotch-for-the-first-time....jpg'
        },
        {
          id: 2,
          order: 1,
          title: 'Second Slide',
          subtitle: 'Different Order',
          img: 'http://esq.h-cdn.co/assets/15/26/980x490/landscape-1435238543-schwarzenegger-cigar.jpg'
        }
      ]
    }
  }

  render() {
    return (
      <div className="presentation">
        <Slide title={this.state.slides[this.state.active].title} subtitle={this.state.slides[this.state.active].subtitle} image={this.state.slides[this.state.active].img} />
      </div>
    );
  }
}

export default Presentation;
