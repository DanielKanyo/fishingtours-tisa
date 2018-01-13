import React, { Component } from 'react';
/** components */
import Sidebar from '../Sidebar/Sidebar';
/** style */
import './About.css';

class About extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="About">
        <div className="Content">
          <div className="aboutTitle">{this.props.objectProp.data.aboutContent.title}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part1}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part2}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part3}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part4}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part5}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part6}</div>
          <div className="aboutContent">{this.props.objectProp.data.aboutContent.content_part7}</div>
          <div className="aboutContent aboutLast">{this.props.objectProp.data.aboutContent.content_part8}</div>
        </div>
        <Sidebar />
      </div>
    );
  }
}

export default About;
