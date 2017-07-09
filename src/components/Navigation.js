import React, { Component } from 'react'
import { Nav, Navbar, NavItem } from 'react-bootstrap'

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
                        </Nav>
                </Navbar>
            </div>
        );
    }
}

export default Navigation;
