import React, { Component } from 'react';
/** style */
import './Home.css';
/** components */
import Sidebar from '../Sidebar/Sidebar';
import News from '../News/News';

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Home">
        <News objectProp={this.props.objectProp} />
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Home;
