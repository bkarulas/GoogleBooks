import React, { Component } from 'react';
import { Jumbotron, Container,  } from 'react-bootstrap';
import './banner.css';

class Banner extends Component {
    render() {
        return(
            <div  className="banner">
                <Container>
                    <Jumbotron>
                        <h1>Google Books Search</h1>
                        <p>Search for and Save Books of Interest</p> 
                    </Jumbotron>
                </Container>
            </div>
        )
    }
}



export default Banner;