import React, { Component } from 'react'
import TourSite from './TourSite'


class TourDetails extends Component {
    constructor(){
        super()
        this.state = {
            selectedDestination: null
        }
        this.handleDestinationSelection = this.handleDestinationSelection.bind(this)
        this.closeModal = this.closeModal.bind(this)
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

        let tourDestinations = this.props.tour.destinations.map((tourDestination) => {
            return <li key={tourDestination} onClick={() => this.handleDestinationSelection(tourDestination)}>
                {tourDestination}
            </li>
        })

        const destination = this.state.selectedDestination

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <div  className="embed-responsive-item">
                        <TourSite destination={destination} closeModal={this.closeModal}/>
                        <h3>Explore {this.props.tour.name}!</h3>
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
