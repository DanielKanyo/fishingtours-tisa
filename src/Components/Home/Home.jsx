import React, { Component } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import './Home.css';

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

class Home extends Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 0
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
      <div className="Home" >
        <div className="homeHeader" >
          <div className="swipeableView" >
            <AutoPlaySwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
              <div className="swipeView first">
                {this.props.objectProp.data.title}
              </div>
              <div className="swipeView second">
                asd
              </div>
              <div className="swipeView third">
                asd
              </div>
            </AutoPlaySwipeableViews>
          </div>
        </div>

      </div>
    );
  }
}

export default Home;
