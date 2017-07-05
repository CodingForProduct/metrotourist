import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel'
import TourDetails from './TourDetails'
import axios from 'axios'

class TourList extends Component {
    constructor(){
        super()
        this.state = {
            tourListings: null,
            selectedTour: null
        }
        this.handleTourSelection = this.handleTourSelection.bind(this)
    }
    componentWillMount(){
        const url = 'http://localhost:3001/tours'
        return axios.get(url, null)
        .then((response) => {
            return this.setState((prevState, props) => {
                return {tourListings: response.data}
            })
        })
    }
    handleTourSelection(tour) {
        this.setState((prev, props) => {
            return {selectedTour: tour}
        })
    }

    render() {
        let tourNames = []

        if (this.state.tourListings) {
        tourNames = this.state.tourListings.map(
            (tourListing) => {
            return <li key={tourListing.id} onClick={() => this.handleTourSelection(tourListing)}>
                {tourListing.name}
            </li>
        })}
        return (
            <div>
                <h3>Explore Los Angeles</h3>
                <ul>{tourNames}</ul>

                {/*Show and hide TourDetails or ImageCarousel here.*/}
                {this.state.selectedTour ? <TourDetails tour={this.state.selectedTour} /> : <ImageCarousel />}
            </div>
        );
    }
}

export default TourList;
