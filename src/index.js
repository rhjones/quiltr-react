import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, Redirect } from 'react-router';

import App from './App';
import Patterns from './modules/Patterns';
import Pattern from './modules/Pattern';

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Redirect from="/" to="/patterns" />
    <Route path="/" component={App}>
      <Route path="patterns" component={Patterns} />
      <Route path="patterns/:id" component={Pattern} />
    </Route>
  </Router>
), document.getElementById('root'));