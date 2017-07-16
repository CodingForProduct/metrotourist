import React, { Component } from 'react'
import { Modal, Button } from 'react-bootstrap'


class TourSite extends Component {
  render() {
    return (
        <Modal show={!!this.props.destination} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>{this.props.destination}</Modal.Title>
            Ph:(323) 464-7625    Address: 6801 Hollywood Blvd      
          </Modal.Header>
          <Modal.Body>
          Located at the Hollywood and Highland Center beside the world famous Dolby Theater and just steps away from the TCL Chinese Theater and Hollywood’s Walk of Fame, the Hard Rock Cafe on Hollywood Boulevard offers high-energy entertainment and a world-class menu. Our 20,000-square-foot cafe includes spacious seating, a live music area, a bar, and two retail stores offering Hard Rock Cafe’s limited-edition merchandise.
          </Modal.Body>
          <Modal.Footer>
           website: (live link) http://www.hardrock.com/cafes/hollywood-on-hollywood-blvd/
            <Button onClick={this.props.closeModal}>Let's go!</Button>
          </Modal.Footer>
        </Modal>
    );
  }
}

export default TourSite;
