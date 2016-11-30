import React, { Component } from 'react';
import { Link } from 'react-router';
import { Col } from 'react-bootstrap';

import PatternMetadata from './PatternMetadata';
import '../Svg.css';

class PatternCard extends Component {

	createSvg() {
	  return {__html: this.props.pattern.svg};
	}

	render() {
		let patternCardStyle = {
			background: '#e3e3e3',
			borderRadius: '4px',
			marginBottom: '15px',
			padding: '10px',
		};

		let svgWrapperStyle = {
			height: '200px',
	    lineHeight: '200px',
	    margin: '0 auto 10px',
	    overflow: 'hidden',
	    textAlign: 'center',
	    width: '100%',
	    background: 'white',
		};

		let captionStyle = {
			background: '#ffffff',
	    display: 'table',
	    height: '96px',
	    padding: '10px',
	    width: '100%',
		};

		let captionPStyle = {
			display: 'table-cell',
    	verticalAlign: 'middle',
    	padding: '0px',
		};

		return (
			<Col sm={4} md={3}>
				<div style={patternCardStyle}>
					<Link to={ '/patterns/' + this.props.pattern.id }>
				    <div>
				      <div style={svgWrapperStyle}>
				        <span className="pattern-card-svg" dangerouslySetInnerHTML={ this.createSvg() } />
				      </div>
				    </div>
				  </Link>
				  <div style={captionStyle}>
				    <p style={captionPStyle}>
				    	<PatternMetadata style={captionPStyle} pattern={this.props.pattern} />
				    </p>
				  </div>
				</div>
			</Col>
		)
	}

}

export default PatternCard;