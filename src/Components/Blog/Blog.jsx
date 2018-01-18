import React, { Component } from 'react';
/** style */
import './Blog.css';
/** components */
import Sidebar from '../Sidebar/Sidebar';

class Blog extends Component {

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
            Blog
          </div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Blog;
