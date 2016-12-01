import React, { Component } from 'react';
import { Col, Row } from 'react-bootstrap';

import PatternMetadata from './PatternMetadata';
import ProjectCard from './ProjectCard';
import '../Svg.css';

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

	  let metaStyle = {
  		background: '#e3e3e3',
	    borderRadius: '4px',
	    lineHeight: '16px',
	    textAlign: 'center',
	    padding: '10px',
	    marginBottom: '10px',
  	};

    let hasProjects = this.state.pattern.projects;

    return (
      <div>
        <Col md={6} style={singlePatternStyle}>
        	<div style={metaStyle}>
          	<p>
              <PatternMetadata pattern={this.state.pattern} />
            </p>
          </div>
          <div style={svgWrapperStyle}>
          	<span className="single-pattern-svg" dangerouslySetInnerHTML={ this.createSvg() } />
          </div>  
        </Col>
        <Col md={6}>
          <h1>Projects based on this pattern</h1>
          {hasProjects && this.state.pattern.projects.length > 0 ? (
            <Row>
              {this.state.pattern.projects.map((project) =>
                <ProjectCard key={project} projectId={project} />
              )}
            </Row>
          ) : (
            <div>This pattern does not yet have any associated projects.</div>
          )}
        </Col>
      </div>
    );
  }
}

export default Pattern;