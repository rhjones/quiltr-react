import React, { Component } from 'react';

class Pattern extends Component {
  render() {
    return (
      <div>
        <p>single pattern: {this.props.params.id}</p>
      </div>
    );
  }
}

export default Pattern;