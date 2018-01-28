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
          <div className="title contactTitle">
            <FontAwesome name="address-card" className="titleIcon" />{this.props.objectProp.data.contactContent.title}
          </div>
          <div className="contentWrapper contactContentWrapper">
            <div className="contactContent">
              <div className="contactContentTextContainer">
                <ul>
                  {this.props.objectProp.data.contactContent.info.map(function (listValue, i) {
                    return <li key={i}>{listValue}</li>;
                  })}
                </ul>
              </div>
              <div className="map">
                <MapContainer />
              </div>
            </div>
            <div className="contentSocialFooter aboutFooter">
              <FacebookProvider appId="320234841816215">
                <Like href="https://www.fishingtours-tisa/contact" action="recommend" layout="button_count" share />
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
