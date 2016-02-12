// Imports
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRedirect, hashHistory } from 'react-router';

// CSS
import './index.css';

// Components
import Slide from './components/Slide';
import Slides from './components/Slides';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={hashHistory}>
    <Route path="/" component={Slides}>
      <IndexRedirect to="slide/0" />
      <Route path="slide/:slideId" component={Slide} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

// Render
render(routes, document.querySelector('#main'));
