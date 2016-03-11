// Imports
import React, { Component } from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, hashHistory as history } from 'react-router';

// CSS
import './index.css';

// Components
import Login from './components/Login';
import Presentations from './components/Presentations';
import Presentation from './components/Presentation';
import ViewSlide from './components/ViewSlide';
import PresentSlide from './components/PresentSlide';
// import EditPresentation from './components/EditPresentation';
import NotFound from './components/NotFound';

// Routes
const routes = (
  <Router history={history}>
    <Route path="/" component={Login} />
    <Route path="/:uid" component={Presentations} />
    <Route path="/:uid/:pid" component={Presentation}>
      <IndexRoute component={ViewSlide} />
      <Route path="present" component={PresentSlide} />
    </Route>
    <Route path="*" component={NotFound} />
  </Router>
);

// Render
render(routes, document.querySelector('#main'));
