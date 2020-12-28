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
    const { recipes } = this.state;
    console.log(this.state.recipes);

    function NewlineText(props) {
      const text = props.text;
      return text.split('\n').map((str) => <p>{str}</p>);
    }

    return (
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome In!</h1>
          </Jumbotron>
        </Row>
      </Container>
    );
  }
});
