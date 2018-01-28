import React, { Component } from 'react';
import FacebookProvider, { Like } from 'react-facebook';
/** style */
import './Footer.css';

class Footer extends Component {

  constructor(props) {
    super(props);
    this.state = {}
  }

  render() {
    return (
      <div className="Footer">
        <div className="footerCopy" >
          Copyright © {(new Date()).getFullYear()}
        </div>
        <div className="footerSocial" >
          <FacebookProvider appId="320234841816215">
            <Like href="https://www.fishingtours-tisa.com" layout="button_count" share />
          </FacebookProvider>
        </div>
      </div>
    );
  }
}

export default Footer;
