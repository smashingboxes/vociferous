// Imports
import React, { Component, cloneElement } from 'react';

// Components
import ViewSlide from '../ViewSlide';
import PresentSlide from '../PresentSlide';

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
          image: 'http://www.gentlemansgazette.com/wp-content/uploads/2014/02/Drinking-Scotch-for-the-first-time....jpg',
          notes: ['omg', 'best day ever']
        },
        {
          id: 2,
          order: 1,
          title: 'Second Slide',
          subtitle: 'Different Order',
          image: 'http://esq.h-cdn.co/assets/15/26/980x490/landscape-1435238543-schwarzenegger-cigar.jpg',
          notes: ['whatever', 'lol']
        }
      ]
    }
  }

  render() {
    return (
      <div className="presentation">
        {cloneElement(this.props.children, {
          ...this.props,
          title: this.state.slides[this.state.active].title,
          subtitle: this.state.slides[this.state.active].subtitle,
          image: this.state.slides[this.state.active].image,
          notes: this.state.slides[this.state.active].notes
        })}
      </div>
    );
  }
}

export default Presentation;
