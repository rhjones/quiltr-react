import React, { Component } from 'react';

class PatternMetadata extends Component {
	render() {
  	return (
	    	<span>
	        {this.props.pattern.quilt_size} |&nbsp; 
	        {this.props.pattern.colors} color |&nbsp;
	        {this.props.pattern.block_size}" blocks
	      </span>
    );

	}
}

export default PatternMetadata;