import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory, Redirect } from 'react-router';


import App from './App';
import Patterns from './modules/Patterns';
import Pattern from './modules/Pattern';
import './index.css';

ReactDOM.render((
  <Router history={browserHistory}>
   	<Redirect from="/" to="/patterns" />
    <Route path="/" component={App}>
      <Route path="patterns" component={Patterns} />
      <Route path="patterns/:id" component={Pattern} />
    </Route>
  </Router>
), document.getElementById('root'));