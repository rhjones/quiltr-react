import React, { Component } from 'react';

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

  	let metaStyle = {
  		background: '#e3e3e3',
	    borderRadius: '4px',
	    lineHeight: '16px',
	    textAlign: 'center',
	    padding: '10px',
	    marginBottom: '10px',
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
          <div style={metaStyle}>
          	<p>
	            {this.state.pattern.quilt_size} |&nbsp; 
	            {this.state.pattern.colors} color |&nbsp;
	            {this.state.pattern.block_size}" blocks
	          </p>
          </div>
          <div style={svgWrapperStyle}>
          	<div style={svgStyle} dangerouslySetInnerHTML={ this.createSvg() } />
          </div>
        </div>   
      </div>
    );
  }
}

export default Pattern;