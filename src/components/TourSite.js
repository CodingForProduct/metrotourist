import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


class TourSite extends Component {
  render() {
    return (
        <Modal show={this.props.destination} onHide={this.close}>
          <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
          </Modal.Header>
          <Modal.Body>

          </Modal.Body>
          <Modal.Footer>
            <Button onClick={this.close}>Close</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TourSite;
