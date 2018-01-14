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
          Content  
        </div> 
      </div>
    );
  }
}

export default Sidebar;
