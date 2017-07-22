import React, { Component } from 'react';
import { Carousel } from 'react-bootstrap';



class ImageCarousel extends Component {
    render() {
        return (
<div className="video-detail col-md-8">
    <div className="embed-responsive embed-responsive-16by9">
        <Carousel className="embed-responsive-item">
            <Carousel.Item>
                <img alt="Santa Monica Pier" src="images/Santa_monica.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Santa Monica Pier" src="images/Walk_of_Fame.jpg" />
            </Carousel.Item>
            <Carousel.Item>
                <img alt="Santa Monica Pier" src="images/Disney_Concert_Hall.jpg" />
            </Carousel.Item>
        </Carousel>

    </div>
</div>

        );
    }
}

export default ImageCarousel;
