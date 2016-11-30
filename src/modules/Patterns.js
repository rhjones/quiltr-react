import React, { Component } from 'react';

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
    fetch(process.env.REACT_APP_API_HOST + 'patterns')
      .then(this.status)
      .then(this.json)
      .then((json) => this.setState({patterns: json}))
      .then(() => console.log(this.state.patterns))
      .catch(console.error)
      ;
  }

  render() {
    return (
      <div>
        <p>multiple patterns</p>
      </div>
    );
  }
}

export default Patterns;