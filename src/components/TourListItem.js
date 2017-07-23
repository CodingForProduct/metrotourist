import React, { Component } from 'react';

class TourListItem extends Component {

    render() {
        const tourListing = this.props.tourListing;
        return (
            <li onClick={() => this.props.handleClick(tourListing)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        {/*<img className="media-object" src={} />*/}
                    </div>
                    <div className="media-body">
                        <div className="media-heading">Name: {tourListing.tourName}</div>
                        <div className="media-heading">Description: {tourListing.description}</div>
                        <div className="media-heading">Station: {tourListing.tourStation}</div>
                        <div className="media-heading">Metro Line: {tourListing.tourLines[0]}</div>
                    </div>
                </div>
            </li>
        );
    }
};


export default TourListItem;
