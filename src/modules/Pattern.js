import React, { Component } from 'react';
import PatternMetadata from './PatternMetadata';

class Pattern extends Component {
	constructor() {
    super();
    this.state = { pattern: [] };
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
    fetch(process.env.REACT_APP_API_HOST + 'patterns/' + this.props.params.id)
      .then(this.status)
      .then(this.json)
      .then((json) => this.setState({pattern: json.pattern}))
      .then(() => console.log(this.state))
      .catch(console.error)
      ; 
  }

  createSvg() {
	  return {__html: this.state.pattern.svg};
	}

  render() {
  	let singlePatternStyle = {
  		paddingTop: '20px',
  	};

  	let svgWrapperStyle = {
  		textAlign: 'center',
  		background: 'white',
  	};

  	let svgStyle = {
	    height: '100%',
	    width: '100%',
	  };

    return (
      <div>
        <div style={singlePatternStyle}>
          <PatternMetadata pattern={this.state.pattern} />
          <div style={svgWrapperStyle}>
          	<div style={svgStyle} dangerouslySetInnerHTML={ this.createSvg() } />
          </div>
        </div>   
      </div>
    );
  }
}

export default Pattern;