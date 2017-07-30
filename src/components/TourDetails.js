import React, { Component } from 'react'
import TourSite from './TourSite'
import axios from 'axios'


class TourDetails extends Component {
    constructor(){
        super()
        this.state = {
            destinationOptions: null,
            selectedDestination: null,
            lastRetrievedSitesTourId: null,
        }
        this.fetchSites = this.fetchSites.bind(this)
        this.handleDestinationSelection = this.handleDestinationSelection.bind(this)
        this.closeModal = this.closeModal.bind(this)
    }

    componentWillMount() {
        this.fetchSites(this.props.tour._id)
    }

    componentDidUpdate() {
        const tourId = this.props.tour._id
        if(!this.state.lastRetrievedSitesTourId || (this.state.lastRetrievedSitesTourId !== tourId)) {
            this.fetchSites(tourId)
        }
    }

    fetchSites(tourId) {
        const url = 'http://localhost:3001/api/sitelist/tourtitle?' + tourId;
        return axios.get(url, null)
        .then((response) => {
            return this.setState((prevState, props) => {
                return {
                    destinationOptions: response.data,
                    lastRetrievedSitesTourId: tourId,
                };
            });
        });
    }

    handleDestinationSelection(destination) {
        this.setState((prev, props) => {
            return {selectedDestination: destination}
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
            console.log("State: ", this.state.destinationOptions)
            tourDestinations = this.state.destinationOptions.map((tourDestination) => {
                console.log("Option: ", tourDestination)
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
