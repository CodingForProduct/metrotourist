import React, { Component } from 'react'
import logo from '../logo.svg';
import Navigation from './Navigation'
import SampleForm from './SampleForm'
import TourList from './TourList'
import ImageCarousel from './ImageCarousel'
import '../App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <Navigation />
        <SampleForm />
        <TourList />
        <ImageCarousel />
      </div>
    );
  }
}

export default App;
