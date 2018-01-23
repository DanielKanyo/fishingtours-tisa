import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
/** components */
import Sidebar from '../Sidebar/Sidebar';
import MapContainer from '../Map/MapContainer';
/** style */
import './Contact.css';

class Contact extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Contact">
        <div className="Content">
          <div className="title contactTitle">{this.props.objectProp.data.contactContent.title}</div>
          <div className="contentWrapper contactContentWrapper">
            <div className="contactContent">
              <div className="contactContentTextContainer">
                <div className="contactText">
                  <FontAwesome name="circle-thin" className="contactIcon" />
                  {this.props.objectProp.data.owner}
                </div>
                <div className="contactText">
                  <FontAwesome name="circle-thin" className="contactIcon" />
                  {this.props.objectProp.data.contactContent.address}
                </div>
                <div className="contactText">
                  <FontAwesome name="circle-thin" className="contactIcon" />
                  {this.props.objectProp.data.contactContent.tel}
                </div>
                <div className="contactText lastText">
                  <FontAwesome name="circle-thin" className="contactIcon" />
                  {this.props.objectProp.data.contactContent.email}
                </div>
              </div>

              <div className="map">
                <MapContainer />
              </div>
            </div>
            <div className="contentSocialFooter aboutFooter">
              <FacebookProvider appId="320234841816215">
                <Like href="http://fishingtours-tisa/contact" action="recommend" layout="button_count" share />
              </FacebookProvider>
            </div>
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Contact;
