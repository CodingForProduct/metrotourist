import React, { Component } from 'react'
import Navigation from './Navigation'
import SampleForm from './SampleForm'
import TourList from './TourList'
import YouTubeSearch from './YouTubeSearch'



class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <YouTubeSearch />
        <TourList />
        <SampleForm />
      </div>
    );
  }
}

export default App;
