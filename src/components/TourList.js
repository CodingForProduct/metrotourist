import React, { Component } from 'react';
import ImageCarousel from './ImageCarousel'
import TourDetails from './TourDetails'

class TourList extends Component {
  render() {
    return (
      <div>
        <h1>Checkout these great tours:</h1>
        <ul>
            <li>Hollywood</li>
            <li>Downtown LA</li>
            <li>Santa Monica</li>
        </ul>

{/*Show and hide TourDetails or ImageCarousel here.*/}

        <ImageCarousel />
        <TourDetails />

      </div>
    );
  }
}

export default TourList;
