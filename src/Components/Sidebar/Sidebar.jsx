import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';
import FontAwesome from 'react-fontawesome';
/** style */
import './Sidebar.css';

class Sidebar extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Sidebar">
        <div className="title sidebarTitle">{this.props.objectProp.data.sidebarContent.title}</div>
        <div className="sidebarContent">
          <div className="sidebarContact">
            <div>
              <div className="sidebarIcon phoneIcon">
                <FontAwesome name="phone" />
              </div>
              <div className="sidebarInfoText number">+381 63 8888773</div>
            </div>
            <div className="sidebarNextLine">
              <div className="sidebarIcon emailIcon">
                <FontAwesome name="envelope" />
              </div>
              <div className="sidebarInfoText email">jkanyo65@gmail.com</div>
            </div>
          </div>
          <FacebookProvider appId="320234841816215">
            <Page href="https://www.facebook.com/KanyoJanos65/" hideCover={true} tabs="messages" height="400" width="290" />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default Sidebar;
