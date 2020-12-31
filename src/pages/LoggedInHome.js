import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default (class LoggedInHome extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    this.getRecipes();
  }

  getRecipes = (_) => {
    fetch('http://localhost:4001/recipes')
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  render() {

    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome In!</h1>
            <p>Welcome in to your cabinet.</p>
            <p>
              Feel free to browse the site and{' '}
              <a href="\allrecipes">review our recipes.</a>
            </p>
            <p>
              Or you can start to <a href="\allrecipes">fill your cabinet</a> so
              you can receive custom recipes.
            </p>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
});
