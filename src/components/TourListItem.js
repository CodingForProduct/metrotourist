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
                        <div className="media-heading">{tourListing.name}</div>
                    </div>
                </div>
            </li>
        );
    }
};


export default TourListItem;
