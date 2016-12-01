import React, { Component } from 'react';
import { Col } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

class ProjectCard extends Component {
	constructor() {
    super();
    this.state = { project: {}, user: {}, image: {} };
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
    fetch(apiHost + 'projects/' + this.props.projectId)
      .then(this.status)
      .then(this.json)
      .then((json) => this.setState({project: json.project}))
      .then(() => console.log(this.state))
      .then(() => {
      	return fetch(apiHost + 'users/' + this.state.project.user);
      })
      .then(this.status)
      .then(this.json)
      .then((json) => this.setState({user : json.user }))
      .then(() => console.log('new state', this.state))
      .then(() => {
      	if (this.state.project.project_uploads.length > 0) {
      		return fetch(apiHost + 'project_uploads/' + this.state.project.project_uploads[0])
	      	.then(this.status)
		      .then(this.json)
		      .then((json) => this.setState({image: json.project_upload}))
		      .then(() => console.log('new state', this.state))
		      ;
      	}
    	})
      .catch(console.error)
      ; 
  }

	render() {
		let projectCardStyle = {
			background: '#e3e3e3',
			borderRadius: '4px',
			marginBottom: '15px',
			padding: '10px',
		};

		let imgWrapperStyle = {
			height: '200px',
	    lineHeight: '200px',
	    margin: '0 auto 10px',
	    overflow: 'hidden',
	    textAlign: 'center',
	    width: '100%',
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

		let missingImgStyle = {
			color: '#999999',
			fontSize: '150px',
    	lineHeight: '200px',
		};

		let imgStyle = {
			width: '100%',
		};

		let hasImage = this.state.image.photo_url;

		return (
			<Col sm={6}>
				<div style={projectCardStyle}>
		      <div style={imgWrapperStyle}>
		        {hasImage ? (
	          	<img src={hasImage} alt={this.state.project.name} style={imgStyle} />
	          ) : (
	            <FontAwesome name='picture-o' style={missingImgStyle} />
	          )}
		      </div>
				  <div style={captionStyle}>
				    <p style={captionPStyle}>
				    	{this.state.project.name} by {this.state.user.username}
				    </p>
				  </div>
				</div>
			</Col>
		)
	}

}

export default ProjectCard;