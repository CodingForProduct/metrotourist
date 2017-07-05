import React, { Component } from 'react';


class TourDetails extends Component {
  render() {

     let tourDestinations = this.props.tour.destinations.map((tourDestination) => {
         return <li key={tourDestination}>
             {tourDestination}
         </li>
     })

    return (
      <div>
        <h3>Explore {this.props.tour.name}!</h3>
        <ul>
            {tourDestinations}
        </ul>
      </div>
    );
  }
}

export default TourDetails;
