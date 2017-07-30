import React, { Component } from 'react';
import { Nav, Navbar, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return (
            <div>
                <Navbar inverse >
                    <Navbar.Header>
                        <Navbar.Brand>
                            <a href="/">MetroTourist</a>
                        </Navbar.Brand>
                    </Navbar.Header>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/videosearch">Video Search</NavItem>
                        <NavItem eventKey={2} href="/tourlistings">Tour Listings</NavItem>
                        <NavDropdown eventKey={3} title="Ride Metro" id="basic-nav-dropdown">
                            <MenuItem eventKey={3.1} target="_blank" href="http://www.metrolinktrains.com/howtoride/">How to Ride</MenuItem>
                            <MenuItem eventKey={3.2} target="_blank" href="http://www.metrolinktrains.com/ticketspricing/">Tickets and Pricing</MenuItem>
                            <MenuItem eventKey={3.3} target="_blank" href="http://www.metrolinktrains.com/stations/">MetroMap</MenuItem>
                            <MenuItem eventKey={3.4} target="_blank" href="http://www.metrolinktrains.com/routes/">Time Tables</MenuItem>
                            <MenuItem divider />
                            <MenuItem eventKey={3.3} target="_blank" href="http://www.metrolinktrains.com/destinationsandevents/">Tips for Visitors</MenuItem>
                        </NavDropdown>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
