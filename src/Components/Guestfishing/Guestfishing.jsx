import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
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
          <div className="title guestfishingTitle">
            <FontAwesome name="anchor" className="titleIcon" />{this.props.objectProp.data.guestfishingContent.title}
          </div>
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
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part24}
            </div>
            <div className="compContent guestfishingContent">
              <ul>
                {this.props.objectProp.data.guestfishingContent.content_part25.map(function (listValue, i) {
                  return <li key={i}>{listValue}</li>;
                })}
              </ul>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part8}
            </div>
            <div className="compContent guestfishingContent">
              <ul>
                {this.props.objectProp.data.guestfishingContent.content_part9.map(function (listValue, i) {
                  return <li key={i}>{listValue}</li>;
                })}
              </ul>
            </div>
            <div className="compContent guestfishingContent">
              <b>{this.props.objectProp.data.guestfishingContent.content_part10}</b>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part11}
            </div>
            <div className="compContent guestfishingContent">
              <table>
                <tbody>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part12.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part13.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part14.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part15.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="compContent guestfishingContent">
              <b>{this.props.objectProp.data.guestfishingContent.content_part16}</b>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part17}
            </div>
            <div className="compContent guestfishingContent">
              <b>{this.props.objectProp.data.guestfishingContent.content_part18}</b>
            </div>
            <div className="compContent guestfishingContent">
              {this.props.objectProp.data.guestfishingContent.content_part19}
            </div>

            <div className="compContent guestfishingContent">
              <table>
                <tbody>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part20.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part21.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part22.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                  <tr>
                    {this.props.objectProp.data.guestfishingContent.content_part23.map(function (listValue, i) {
                      return <td key={i}>{listValue}</td>;
                    })}
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="contentSocialFooter guestfishingFooter">
              <FacebookProvider appId="320234841816215">
                <Like href="http://www.fishingtours-tisa/guestfishing" action="recommend" layout="button_count" share />
              </FacebookProvider>
            </div>

          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Guestfishing;
