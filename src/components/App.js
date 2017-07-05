import React, { Component } from 'react'
import Navigation from './Navigation'
import SampleForm from './SampleForm'
import TourList from './TourList'



class App extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <TourList />
        <SampleForm />
      </div>
    );
  }
}

export default App;
