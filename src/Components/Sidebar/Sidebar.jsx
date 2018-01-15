import React, { Component } from 'react';
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
        <div className="sidebarTitle">Sidebar</div>
        <div className="sidebarContent">
          <div className="fb-page"
            data-href="https://www.facebook.com/KanyoJanos65/"
            data-tabs="messages"
            data-small-header="true"
            data-adapt-container-width="false"
            data-hide-cover="true"
            data-show-facepile="true">
            <blockquote cite="https://www.facebook.com/KanyoJanos65/"
              className="fb-xfbml-parse-ignore">
              <a href="https://www.facebook.com/KanyoJanos65/">
                Horgásztúrák - Magyarkanizsa
          </a>
            </blockquote>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;
