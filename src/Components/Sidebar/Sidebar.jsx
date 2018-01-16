import React, { Component } from 'react';
import FacebookProvider, { Page } from 'react-facebook';
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
          <FacebookProvider appId="320234841816215">
            <Page href="https://www.facebook.com/KanyoJanos65/" hideCover={true} tabs="messages" height="400" width="292"/>
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default Sidebar;
