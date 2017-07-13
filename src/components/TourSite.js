import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


class TourSite extends Component {
  render() {
    return (
        <Modal show={this.props.destination} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.props.closeModal}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TourSite;
