import React, { Component } from 'react'
import ImageCarousel from './ImageCarousel'
import TourDetails from './TourDetails'
import axios from 'axios'

class TourList extends Component {
    constructor(){
        super()
        this.state = {
            tourListings: null
        }
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

    render() {
        let tourNames = []

        if (this.state.tourListings) {
        tourNames = this.state.tourListings.map(
            (tourListing) => {
            return <li key={tourListing.id}>{tourListing.name}</li>
        })}
        return (
            <div>
                <h3>Explore Los Angeles</h3>
                <ul>{tourNames}</ul>

                {/*Show and hide TourDetails or ImageCarousel here.*/}

                <ImageCarousel />
                <TourDetails />

            </div>
        );
    }
}

export default TourList;
