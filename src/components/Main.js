import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import TourList from './TourList';
import YouTubeSearch from './YouTubeSearch';



class Main extends Component {
  render() {
    return (
      <div>
          <Switch>
              <Route path='/videosearch' component={YouTubeSearch}/>
              <Route path='/tourlistings' component={TourList}/>
          </Switch>
      </div>
    );
  }
}

export default Main;
