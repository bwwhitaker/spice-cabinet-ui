import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import LoginButton from '../components/LoginButton';

export default (class LoggedOutHome extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome to Spice Cabinet!</h1>
            <p> </p>
            <p>
              Welcome to Cooks of all experience levels! Whether you're an
              expert looking for new recipes or you're a newbie trying to figure
              out just make use of the cumin you bought last month, we've got
              something for you!
            </p>
            <p>
              At Spice Cabinet our focus on searching based on what you've got.
              Once you provide some details about your herbs, spices, and other
              dry goods on hand, we can direct you to recipes that'll help use
              up everything: be it your celery seed or allspice.
            </p>
            <p>
              You no longer need to worry that the spices you bought for one
              recipe will gather dust. We'll help make your kitchen
              well-stocked, well-used, and well-spiced.
            </p>
            <p>
              If you're coming back, please log back into your cabinet. If
              you're new here, please log in and we'll take some notes to get
              you cooking!
            </p>

            <Col md={{ span: 2, offset: 5 }}>
              <LoginButton />
            </Col>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
});
