import React, { Component } from 'react';


class TourDetails extends Component {
    render() {

        let tourDestinations = this.props.tour.destinations.map((tourDestination) => {
            return <li key={tourDestination}>
                {tourDestination}
            </li>
        })

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <div  className="embed-responsive-item">
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
