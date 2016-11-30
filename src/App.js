import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import { Link } from 'react-router';
import { Grid, Navbar } from 'react-bootstrap';


class App extends Component {
  render() {
    let navStyle = {
      background: '#00996a',
      color: '#ffffff',
    };

    let white = {
      color: '#ffffff',
    };

    let brandFont = {
      fontFamily: 'Pacifico',
    };

    return (
      <div>

        <Navbar style={navStyle}>
          <Navbar.Header>
            <Navbar.Brand>
              <Link style={white} to="/">
                <FontAwesome name='scissors' rotate={90} />
                <span style={brandFont}>Quiltr</span>
              </Link>
            </Navbar.Brand>
          </Navbar.Header>
          <ul className="nav navbar-nav">
            <li><Link style={white} to="/patterns">Patterns</Link></li>
          </ul>
        </Navbar>
        

        <Grid fluid={true}>
          {this.props.children}
        </Grid>
      </div>
    );
  }
}

export default App;
