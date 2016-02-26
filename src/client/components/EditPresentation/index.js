// Imports
import React, { Component } from 'react';

/*
  EditPresentation
  <EditPresentation/>
*/

class EditPresentation extends Component {
  constructor() {
    super();

    this.state = {
      slides: [],
      title: ''
    }
  }

  titleChange(event) {
    this.setState({title: event.target.value});
  }

  addSlide() {
    const timestamp = (new Date()).getTime();
    this.state.slides.push({id: timestamp});
    this.setState({ slides: this.state.slides });
  }

  handleSlideChange(slide) {
    console.log(slide);
  }

  renderSlideInput(slide) {
    return (
      <fieldset key={slide.id} className="slide-input">
        <label>Slide Title</label>
        <input type="text" value={this.state.value} onChange={this.handleSlideChange(slide)} />
      </fieldset>
    )
  }

  renderSlideOutput(slide) {
    return (
      <div key={slide.id} className="slide-output">
        <p className="slide-id">{slide.id}</p>
        <h3>{slide.title}</h3>
      </div>
    )
  }

  render() {
    return (
      <div className="edit-presentation">
        <div className="input">
          <h2>Input</h2>
          <fieldset className="input-title">
            <label>Presentation Title</label>
            <input type="text" value={this.state.value} onChange={this.titleChange.bind(this)} />
          </fieldset>
          {this.state.slides.map(this.renderSlideInput.bind(this))}
          <button onClick={this.addSlide.bind(this)}>Add Slide</button>
        </div>
        <div className="output">
          <h2>Output</h2>
          <div className="output-title">
            <h1>{this.state.title}</h1>
          </div>
          {this.state.slides.map(this.renderSlideInput.bind(this))}
        </div>
      </div>
    );
  }
}

export default EditPresentation;
