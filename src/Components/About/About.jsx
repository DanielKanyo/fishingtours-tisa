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
          <div className="title aboutTitle">{this.props.objectProp.data.aboutContent.title}</div>
          <div className="contentWrapper aboutContentWrapper">
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part1}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part2}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part3}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part4}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part5}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part6}</div>
            <div className="compContent aboutContent">{this.props.objectProp.data.aboutContent.content_part7}</div>
            <div className="compContent aboutContent aboutLast">{this.props.objectProp.data.aboutContent.content_part8}</div>
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default About;
