import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import FontAwesome from 'react-fontawesome';
/** style */
import './App.css';
/** data files */
import { DataHun } from './Data/data-hun';
import { DataEng } from './Data/data-eng';
import { DataSrb } from './Data/data-srb';
/** components */
import About from './Components/About/About';
import Footer from './Components/Footer/Footer';
import Gallery from './Components/Gallery/Gallery';
import Blog1 from './Components/Blog1/Blog1';
import Contact from './Components/Contact/Contact';
import Sidebar from './Components/Sidebar/Sidebar';
import Guestfishing from './Components/Guestfishing/Guestfishing';

let url = window.location.href;
let display;

if (url.length === 22) {
  display = "block";
} else {
  display = "none"
}

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      object: DataEng,
      index: 0,
      dropdownMargin: -256,
      showOrHideNews: display
    }
    this.changeLanguage = this.changeLanguage.bind(this);
    this.changeActiveComp = this.changeActiveComp.bind(this);
    this.showOrHideComponent = this.showOrHideComponent.bind(this);
  }

  //change language, buttons backgroung color and the dataobject source
  changeLanguage(e) {
    let element = e.target;
    let elementText = element.innerHTML;
    let languageNumber = document.getElementsByClassName("language").length;

    for (let i = 0; i < languageNumber; i++) {
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
        object: DataHun,
        dropdownMargin: -281
      });
    } else if (elementText === "ENG") {
      this.setState({
        object: DataEng,
        dropdownMargin: -256
      });
    } else {
      this.setState({
        object: DataSrb,
        dropdownMargin: -264
      });
    }
  }

  changeActiveComp(e) {
    let element = e.target;
    let siteNumber = document.getElementsByClassName("menuItem").length;

    for (let i = 0; i < siteNumber; i++) {
      let menuElement = document.getElementsByClassName("menuItem")[i];
      let elementClasses = menuElement.className;
      let contains = elementClasses.includes("active");

      if (element !== menuElement) {
        if (contains) {
          menuElement.classList.remove("active");
        }
      }
    }

    if (element.classList.value === "entryTitle" || element.classList.value === "entryDate") {
      element.parentNode.classList.add("active");
      element.parentNode.parentNode.parentNode.children[0].classList.add("active");
    } else {
      if (element.parentNode.parentNode.children[0].text === "Blog") {
        element.parentNode.parentNode.children[0].classList.add("active");
        element.classList.add("active");
      } else {
        element.classList.add("active");
      }
    }
  }

  handleChangeIndex = index => {
    this.setState({
      index,
    });
  };

  showOrHideComponent(e) {
    let element = e.target;

    if (element.text === "Home" || element.text === "Kezdőlap" || element.text === "Početna") {
      this.setState({
        showOrHideNews: "block"
      });
    } else {
      this.setState({
        showOrHideNews: "none"
      })
    }
  }

  render() {
    const { index } = this.state;
    return (
      <div className="App">
        <Router>
          <div>
            <div className="Menubar">
              <ul>
                <li>
                  <Link to="/" className="menuItem active"
                    onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                    {this.state.object.data.menuItems[0]}
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="menuItem"
                    onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                    {this.state.object.data.menuItems[1]}
                  </Link>
                </li>
                <li>
                  <Link to="/gallery" className="menuItem"
                    onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                    {this.state.object.data.menuItems[2]}
                  </Link>
                </li>
                <li className="dropdown">
                  <a className="dropbtn menuItem">Blog</a>
                  <div className="dropdown-content" style={{ marginLeft: this.state.dropdownMargin }}>
                    <Link to="/blog1" className="menuItem"
                      onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                      <div className="entryTitle">
                        A "Glavinjar" - vertikális mű csali - 1. rész
                      </div>
                      <div className="entryDate">
                        2015.01.13
                      </div>
                    </Link>
                  </div>
                </li>
                <li>
                  <Link to="/guestfishing" className="menuItem"
                    onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                    {this.state.object.data.menuItems[4]}
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="menuItem"
                    onClick={(e) => { this.changeActiveComp(e); this.showOrHideComponent(e) }}>
                    {this.state.object.data.menuItems[5]}
                  </Link>
                </li>
                <li onClick={(e) => this.changeLanguage(e)} className="language">HUN</li>
                <li onClick={(e) => this.changeLanguage(e)} className="language">SRB</li>
                <li onClick={(e) => this.changeLanguage(e)} className="language active">ENG</li>
              </ul>
            </div>

            <div className="swipeableView">
              <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
                <div className="swipeView first">
                  <div className="pageTitleContent">
                    <div className="pageTitle">{this.state.object.data.title}</div>
                    <div className="pageOwner">{this.state.object.data.owner}</div>
                  </div>
                </div>
                <div className="swipeView second">

                </div>
                <div className="swipeView third">

                </div>
              </AutoPlaySwipeableViews>
            </div>

            <div style={{ display: this.state.showOrHideNews }}>
              <div className="News">
                <div className="Content">
                  <div className="title aboutTitle">{this.state.object.data.newsContent.title}</div>
                  <div className="contentWrapper newsContentWrapper">
                    <div className="newsTitle">
                      A "Glavinjar" - vertikális mű csali - 1. rész
                    </div>
                    <div className="newsContent">
                      Pár évvel ezelőtt vettem először kezembe a „Glavinjar”-t, majd az idén már kipróbálásra is sor került.
                      Legendákat hallottam róla! Innen-onnan jöttek a hírek, hogy jó kezekben,
                      igazán ütős fegyver, a harcsákkal szemben...
                    </div>
                    <div className="readMoreContent">
                      <Link to="/blog1" onClick={(e) => { this.showOrHideComponent(e) }}>
                        <div className="readMoreText">
                          <FontAwesome name="book" className="readMoreIcon" />
                          {this.state.object.data.newsContent.readmore}
                        </div>
                      </Link>
                    </div>
                  </div>
                </div>
                <Sidebar objectProp={this.state.object} />
              </div>
            </div>

            <Route path="/about" render={() => <About objectProp={this.state.object} />} />
            <Route path="/gallery" render={() => <Gallery objectProp={this.state.object} />} />
            <Route path="/blog1" render={() => <Blog1 objectProp={this.state.object} />} />
            <Route path="/guestfishing" render={() => <Guestfishing objectProp={this.state.object} />} />
            <Route path="/contact" render={() => <Contact objectProp={this.state.object} />} />
          </div>
        </Router>
        <Footer />
      </div>
    );
  }
}

export default App;
