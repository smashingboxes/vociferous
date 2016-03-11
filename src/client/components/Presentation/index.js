// Imports
import React, { Component, PropTypes, cloneElement } from 'react';
import { Link } from 'react-router';

// Components
import ViewSlide from '../ViewSlide';
import PresentSlide from '../PresentSlide';

/*
  Presentation
  <Presentation/>
*/

class Presentation extends Component {
  constructor(props) {
    super(props);

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

  goToNextSlide() {
    this.setState({
      active: this.state.active + 1
    });
  }

  goToPreviousSlide() {
    this.setState({
      active: this.state.active - 1
    });
  }

  render() {
    return (
      <div className="presentation">
        {cloneElement(this.props.children, {
          ...this.props,
          slide: this.state.slides[this.state.active],
          previousTitle: this.state.slides[this.state.active - 1] ? this.state.slides[this.state.active - 1].title : '',
          nextTitle: this.state.slides[this.state.active + 1] ? this.state.slides[this.state.active + 1].title : '',
          goToNextSlide: this.goToNextSlide.bind(this),
          goToPreviousSlide: this.goToPreviousSlide.bind(this)
        })}
      </div>
    );
  }
}

Presentation.propTypes = {
  params: PropTypes.object,
  children: PropTypes.node
};

export default Presentation;
