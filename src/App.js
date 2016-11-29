import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/patterns">Patterns</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default App;
