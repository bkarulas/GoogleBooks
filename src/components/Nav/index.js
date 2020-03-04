import React, { Component } from 'react';
import { Navbar, Nav, Row } from 'react-bootstrap';

class Navigation extends Component {
    render() {
        return(
            <div  className="navbar">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Row className="offset-md-1">
                        <Navbar.Brand>Google Books</Navbar.Brand>
                        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                        <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#features">Features</Nav.Link>
                                <Nav.Link href="#pricing">Pricing</Nav.Link>
                            </Nav>
                        </Navbar.Collapse>
                    </Row>
                </Navbar>
            </div>
        )
    }
}



export default Navigation;