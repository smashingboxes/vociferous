// Imports
import React, { Component } from 'react';
import { render } from 'react-dom';

var HelloWorld = React.createClass({
  render: function () {
    return React.createElement('div', null, 'Hello World');
  }
});

// Render
render(React.createElement(HelloWorld), document.querySelector('#main'));
