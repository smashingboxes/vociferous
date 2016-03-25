// Imports
import React, { Component, PropTypes, cloneElement } from 'react';
import { Link } from 'react-router';
// import reactMixin from 'react-mixin';
import deepstream from 'deepstream.io-client-js';
// import DeepstreamMixin from 'deepstream.io-tools-react';

// const client = deepstream( 'http://localhost:6020' );
const client = deepstream( 'http://vox.biko.computer' );

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
      presentation: null,
      data: null,
      active: 0
    };
  }

  componentDidMount() {
    this.setState({
      presentation: client.record.getRecord('VOX/users/churchill/scotch-cigars-victory')
    });

    client.login({ username: 'churchill', password: 'scotch' }, ( success, errorEvent, data ) => {
      console.log('mike');
      this.state.presentation.subscribe('data', ( data ) => {
        if (data) {
          this.setState({
            data: data,
            active: data.active
          });
        }
      });

      this.state.presentation.subscribe('data.active', ( active ) => {
        this.setState({
          active: active
        });
      });
    });
  }

  goToNextSlide() {
    if (this.state.active == this.state.data.slides.length) {
      return;
    } else {
      this.state.presentation.set('data.active', this.state.active + 1);
    }
  }

  goToPreviousSlide() {
    if (this.state.active <= 1) {
      this.state.presentation.set('data.active', 0);
    } else {
      this.state.presentation.set('data.active', this.state.active - 1);
    }
  }

  render() {
    console.log(this.state.data);
    return (
      <div className="presentation">
        {this.state.data && cloneElement(this.props.children, {
          ...this.props,
          slide: this.state.data.slides[this.state.active],
          previousTitle: this.state.data.slides[this.state.active - 1] ? this.state.data.slides[this.state.active - 1].title : '',
          nextTitle: this.state.data.slides[this.state.active + 1] ? this.state.data.slides[this.state.active + 1].title : '',
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
