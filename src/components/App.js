import React, { Component } from 'react'
import Navigation from './Navigation'
import SampleForm from './SampleForm'
import TourList from './TourList'
import ImageCarousel from './ImageCarousel'


class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <TourList />
        <ImageCarousel />
        <SampleForm />
      </div>
    );
  }
}

export default App;
