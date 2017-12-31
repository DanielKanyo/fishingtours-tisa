import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './Menu.css';
import { DATA } from '../../Data/data';

import Home from '../Home/Home';
import About from '../About/About';

class Menu extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: DATA
    }
  }

  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <div className="Menubar">
              <ul>
                <Link to="/"><li>Home</li></Link>
                <Link to="/about"><li>About</li></Link>
              </ul>
            </div>

            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

export default Menu;
