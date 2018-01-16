import React, { Component } from 'react';
/** style */
import './News.css';

class News extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="News">
        <div className="title newsTitle">{this.props.objectProp.data.newsContent.title}</div>
        <div className="contentWrapper aboutContentWrapper">
          news
        </div>
      </div>
    );
  }
}

export default News;
