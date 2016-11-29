import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory } from 'react-router';


import App from './App';
import Home from './modules/Home';
import Patterns from './modules/Patterns';
import Pattern from './modules/Pattern';
import './index.css';

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Home} />
      <Route path="patterns" component={Patterns} />
      <Route path="patterns/:id" component={Pattern} />
    </Route>
  </Router>
), document.getElementById('root'));