import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';
import LoginButton from "../components/LoginButton"

export default (
  class LoggedOutHome extends Component {
 

  render() {
    return (
        <Container>
            <Row>
            <Jumbotron >
                <h1>Welcome to Spice Cabinet!</h1>
                    <p> </p>
                    <p>
                        Welcome cooks of all experience levels! Whether you're an expert looking for new recipes or you're a newbie trying to figure out just make use of the cumin you bought last month, we've got something for you!
                    </p>
                    <p>
                        What sets Spice Cabinet apart from other cooking sites is our focus on searching based on what you've got. So once you provide some details about your herbs, spices, and other dry goods on hand, we can direct you to recipes that'll help use up that cumin you bought or the allspice.
                    </p>
                    <p>
                        No longer will you worry about spending money on spices for one recipe and where they'll gather dust. We'll keep your kitchen spiced and nice.
                    </p>
                    <p>
                        If you're coming back, please log back into your cabinet. If you're new, please log in and we'll take some notes to get you cooking!
                    </p>
                    
                    <Col md={{ span: 2, offset: 5 }}><LoginButton /></Col>
            </Jumbotron>
            </Row>
        </Container>
        
    );
  }
}
)