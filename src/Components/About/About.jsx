import React, { Component } from 'react';

class About extends Component {
  render() {
    return (
      <div>
        {this.props.objectProp.data.aboutContent.title}
      </div>
    );
  }
}

export default About;
