// Imports
import React, { Component, PropTypes, cloneElement } from 'react';
import { Link } from 'react-router';
// import reactMixin from 'react-mixin';
// import deepstream from 'deepstream.io-client-js';
// import DeepstreamMixin from 'deepstream.io-tools-react';

// const users = ds.record.getList( 'users' );
// const user = users.getRecord( 'churchill' );
// const presentations = users.getList( 'presentations' );

// OR
// let presentations;
// ds.login({ user: 'churchill', pass: 'securepassword' }, function( success ){
  // if( success ) {
  //   //Allowed
  //   presentations = ds.record.getList( 'presentations' );
  // }
// });

// ER maybe not ...

// const presentation = presentations.getRecord( 'scotch-cigars-victory' );
// var onPresentationChange = function( data ) {
//   // update state with
//   this.setState(data);
// };
// presentation.subscribe( onPresentationChange );
// presentation.unsubscribe( onPresentationChange );
// // Stop the server from sending updates altogether
// pupils.discard();
// goToNextSlide() {
//   presentation.set('active', this.state.active + 1);
// }

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
          title: 'Scotch',
          subtitle: 'Scotchy scotch scotch, I love scotch',
          image: 'http://www.gentlemansgazette.com/wp-content/uploads/2014/02/Drinking-Scotch-for-the-first-time....jpg',
          notes: ['omg', 'best day ever']
        },
        {
          id: 2,
          title: 'Second Slide',
          subtitle: 'Different Order',
          image: 'http://esq.h-cdn.co/assets/15/26/980x490/landscape-1435238543-schwarzenegger-cigar.jpg',
          notes: ['whatever', 'lol']
        },
        {
          'id': 3,
          'title': 'Victory',
          'subtitle': 'Without victory, there is no survival',
          'image': 'http://www.debutesq.com/Lounge2014/Winston%20Churchill/Winston-Churchill.jpg',
          'notes': [
            'More filler',
            'And a little more filler crap'
          ]
        }
      ]
    }
  }

  // componentDidMount() {
  //
  // }

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

// reactMixin.onClass(Presentation, DeepstreamMixin);

export default Presentation;
