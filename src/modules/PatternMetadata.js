import React, { Component } from 'react';

class PatternMetadata extends Component {
	render() {
  	return (
	    	<p>
	        {this.props.pattern.quilt_size} |&nbsp; 
	        {this.props.pattern.colors} color |&nbsp;
	        {this.props.pattern.block_size}" blocks
	      </p>
    );

	}
}

export default PatternMetadata;