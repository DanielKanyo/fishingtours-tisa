import React, { Component } from 'react';
/** style */
import './Blog1.css';
/** components */
import Sidebar from '../Sidebar/Sidebar';

class Blog1 extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Blog">
        <div className="Content">
          <div className="title blogTitle">{this.props.objectProp.data.blogContent.title}</div>
          <div className="contentWrapper blogContentWrapper">
            Blog1
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Blog1;
