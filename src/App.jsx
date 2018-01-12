import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
/** style */
import './App.css';
/** data files */
import { DataHun } from './Data/data-hun';
import { DataEng } from './Data/data-eng';
import { DataSrb } from './Data/data-srb';
/** components */
import Home from './Components/Home/Home';
import About from './Components/About/About';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      object: DataEng,
      index: 0
    }
    this.changeLanguage = this.changeLanguage.bind(this);
  }

  //change language, buttons backgroung color and the dataobject source
  changeLanguage(e) {

    let element = e.target;
    let elementText = element.innerHTML;

    for (let i = 0; i < 3; i++) {
      let languageElement = document.getElementsByClassName("language")[i];
      let elementClasses = languageElement.className;
      let contains = elementClasses.includes("active");

      //if you click on the same button
      if (element !== languageElement) {
        if (contains) {
          languageElement.classList.remove("active");
        }
      }
    }

    element.classList.add("active");

    if (elementText === "HUN") {
      this.setState({
        object: DataHun
      });
    } else if (elementText === "ENG") {
      this.setState({
        object: DataEng
      });
    } else {
      this.setState({
        object: DataSrb
      });
    }
  }

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  render() {
    const { index } = this.state;
    return (
      <div className="App">
        <div className="Menu">
          <Router>
            <div>
              <div className="Menubar">
                <ul>
                  <Link to="/"><li className="menuItem">{this.state.object.data.menuItems[0]}</li></Link>
                  <Link to="/about"><li className="menuItem">{this.state.object.data.menuItems[1]}</li></Link>
                  <li onClick={(e) => this.changeLanguage(e)} className="language">HUN</li>
                  <li onClick={(e) => this.changeLanguage(e)} className="language">SRB</li>
                  <li onClick={(e) => this.changeLanguage(e)} className="language active">ENG</li>
                </ul>
              </div>

              <div className="swipeableView">
                <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                  <div className="swipeView first">
                    {this.state.object.data.title}
                  </div>
                  <div className="swipeView second">
                  {this.state.object.data.title}
              </div>
                  <div className="swipeView third">
                  {this.state.object.data.title}
              </div>
                </AutoPlaySwipeableViews>
              </div>

              <Route exact path="/" render={() => <Home objectProp={this.state.object} />} />
              <Route path="/about" render={() => <About objectProp={this.state.object} />} />
            </div>
          </Router>
        </div>
      </div>
    );
  }
}

export default App;
