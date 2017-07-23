import React, { Component } from 'react';
import ImageCarousel from './ImageCarousel';
import TourDetails from './TourDetails';
import TourListItem from './TourListItem';
import axios from 'axios';

// let imgURL = "images/HollywoodBackground.jpg"
// let styles = {
//             backgroundImage: 'url(' + imgURL + ')',
//             backgroundSize: 'cover',
//             overflow: 'hidden',
//         }
//
// let divStyles = {
//     height: "1000px"
// }

class TourList extends Component {
    constructor(){
        super();
        this.state = {
            tourListings: null,
            selectedTour: null
        };
        this.handleTourSelection = this.handleTourSelection.bind(this)
    }
    componentWillMount(){
        const url = 'http://localhost:3001/api/tourlist';
        return axios.get(url, null)
        .then((response) => {
            return this.setState((prevState, props) => {
                return {tourListings: response.data};
            });
        });
    }
    handleTourSelection(tour) {
        this.setState((prev, props) => {
            return {selectedTour: tour};
        });
    }

    render() {
        let tourNames = [];

        if (this.state.tourListings) {
            tourNames = this.state.tourListings.map(
                (tourListing) => {
                    return <TourListItem key={tourListing.id} tourListing={tourListing} handleClick={this.handleTourSelection} />
                })}
                return (
                    <div>
                        {/*Show and hide TourDetails or ImageCarousel here.*/}
                        {this.state.selectedTour ? <TourDetails tour={this.state.selectedTour} /> : <ImageCarousel />}
                        <ul className="col-md-4 list-group">
                            {tourNames}
                        </ul>

                    </div>
                );
            }
        }

        export default TourList;
