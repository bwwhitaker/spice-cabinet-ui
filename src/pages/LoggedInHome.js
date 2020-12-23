import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { useAuth0 } from "@auth0/auth0-react";



export default (
  class LoggedInHome extends Component {

    
    

  render()
  
   {
    return (
        <Container>
            <Row>
            <Jumbotron >
                <h1>Welcome In!</h1>
            </Jumbotron>
            </Row>
        </Container>
        
    );
  }
}
)