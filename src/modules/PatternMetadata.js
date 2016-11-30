import React, { Component } from 'react';

class PatternMetadata extends Component {
	render() {
		let metaStyle = {
  		background: '#e3e3e3',
	    borderRadius: '4px',
	    lineHeight: '16px',
	    textAlign: 'center',
	    padding: '10px',
	    marginBottom: '10px',
  	};

  	return (
  		<div style={metaStyle}>
	    	<p>
	        {this.props.pattern.quilt_size} |&nbsp; 
	        {this.props.pattern.colors} color |&nbsp;
	        {this.props.pattern.block_size}" blocks
	      </p>
	    </div>
    );

	}
}

export default PatternMetadata;