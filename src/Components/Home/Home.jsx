import React, { Component } from 'react';
/** style */
import './Home.css';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Home">
        <div className="Content">Content</div>
        <div className="Sidebar">Sidebar</div>
      </div>
    );
  }
}

export default Home;
