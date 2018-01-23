import React, { Component } from 'react';
/** style */
import './Guestfishing.css';
/** component */
import Sidebar from '../Sidebar/Sidebar';

class Guestfishing extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Guestfishing">
        <div className="Content">
          <div className="title guestfishingTitle">{this.props.objectProp.data.guestfishingContent.title}</div>
          <div className="contentWrapper guestfishingContentWrapper">
            <div className="compContent guestfishingContent">
              <b>{this.props.objectProp.data.guestfishingContent.content_part1}</b>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part2}
            </div>
            <div className="compContent guestfishingContent">
              <b>{this.props.objectProp.data.guestfishingContent.content_part3}</b>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part4}
            </div>
            <div className="compContent guestfishingContent">
              <ul>
                {this.props.objectProp.data.guestfishingContent.content_part5.map(function (listValue, i) {
                  return <li key={i}>{listValue}</li>;
                })}
              </ul>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part6}
            </div>
            <div className="compContent guestfishingContent">
              <ul>
                {this.props.objectProp.data.guestfishingContent.content_part7.map(function (listValue, i) {
                  return <li key={i}>{listValue}</li>;
                })}
              </ul>
            </div>
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Guestfishing;
