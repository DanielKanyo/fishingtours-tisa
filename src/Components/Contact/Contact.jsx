import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';
/** components */
import Sidebar from '../Sidebar/Sidebar';
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
          <div className="title contactTitle">{this.props.objectProp.data.contactContent.title}</div>
        </div>
        <Sidebar objectProp={this.props.objectProp} />
      </div>
    );
  }
}

export default Contact;
