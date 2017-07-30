import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'



class TourSite extends Component {
    render() {
        if(this.props.destination) {
            return (
                <Modal show={!!this.props.destination} onHide={this.props.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>{this.props.destination.siteName}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <div><b>About:</b> {this.props.destination.longDescription}</div>
                        <div><b>Address:</b> {this.props.destination.address}</div>
                        <div><a target="_blank" href={`http://${this.props.destination.website}`}>{this.props.destination.website}</a></div>

                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.props.closeModal}>Let's go!</Button>
                    </Modal.Footer>
                </Modal>
            );
        } else {
            return (
                <div></div>
            )
        }
    }
}

export default TourSite;
