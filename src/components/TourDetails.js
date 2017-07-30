import React, { Component } from 'react'
import TourSite from './TourSite'
import axios from 'axios'


class TourDetails extends Component {
    constructor(){
        super()
        this.state = {
            destinationOptions: null,
            selectedDestination: null,
            lastRetrievedSitesTourName: null,
        }
        this.fetchSites = this.fetchSites.bind(this)
        this.handleDestinationSelection = this.handleDestinationSelection.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillMount() {
        this.fetchSites(this.props.tour.tourName)
    }

    componentDidUpdate() {
        const tourName = this.props.tour.tourName
        if(!this.state.lastRetrievedSitesTourName || (this.state.lastRetrievedSitesTourName !== tourName)) {
            this.fetchSites(tourName)
        }
    }

    fetchSites(tourName) {
        const url = `http://localhost:3001/api/tours/${tourName}/sites`;
        return axios.get(url, null)
        .then((response) => {
            return this.setState((prevState, props) => {
                return {
                    destinationOptions: response.data,
                    lastRetrievedSitesTourName: tourName,
                };
            });
        });
    }

    handleDestinationSelection(tourDestination) {
        this.setState((prev, props) => {
            return {selectedDestination: tourDestination}
        })
    }

    closeModal() {
        this.setState((prev, props) => {
            return {selectedDestination: null}
        })
    }


    render() {

        let tourDestinations = []
        if(this.state.destinationOptions) {
            tourDestinations = this.state.destinationOptions.map((tourDestination) => {
                return <li key={tourDestination._id} onClick={() => this.handleDestinationSelection(tourDestination)}>
                    {tourDestination.siteName}
                </li>
            })
        }

        const destination = this.state.selectedDestination

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <div  className="embed-responsive-item">
                        <TourSite destination={destination} closeModal={this.closeModal}/>
                        <h3>Explore {this.props.tour.tourName}!</h3>
                        <ul className="details">
                            {tourDestinations}
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default TourDetails;
