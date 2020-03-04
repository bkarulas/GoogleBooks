import React, { Component } from 'react';
import { Container, Row, Form, Button } from 'react-bootstrap';
import './search.css'

class Search extends Component {
    render() {
        return(
            <div  className="searchbox">
                <Container>
                    <Row>
                        <h3>Book Search</h3>
                    </Row>
                    <Row>
                        Book
                    </Row>
                    <Form>
                        <Row>
                            <Form.Control placeholder="Search for a Book" />
                            <Button variant="dark" type="submit" className="allbuttons">Search</Button>
                        </Row>
                    </Form>
                </Container>
            </div>
        )
    }
}



export default Search;