import React, { Component } from 'react';
import { Grid } from 'react-bootstrap';

import PatternCard from './PatternCard';

class Patterns extends Component {
	constructor() {
    super();
    this.state = { patterns: [] };
  }

  status(response) {  
	  if (response.status >= 200 && response.status < 300) {  
	    return Promise.resolve(response);
	  } else {  
	    return Promise.reject(new Error(response.statusText));
	  }  
	}

	json(response) {  
	  return response.json();
	}

  componentDidMount() {
    let apiHost = process.env.REACT_APP_API_HOST;
    fetch(apiHost + 'patterns')
      .then(this.status)
      .then(this.json)
      .then((json) => this.setState({patterns: json.patterns}))
      .then(() => console.log(this.state.patterns))
      .catch(console.error)
      ; 
  }

  render() {
    return (
    	<div>
	    	<h1>Pattern Gallery</h1>
	    	<Grid fluid={true}>
		        {this.state.patterns.map((pattern) =>
		          <PatternCard key={pattern.id} pattern={pattern} />
		        )}
		    </Grid>
	    </div>
    );
  }
}

export default Patterns;