import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import GetUser from '../components/GetUser'

export default (class LoggedInHome extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [] };
  }

  componentDidMount() {
    this.getRecipes();
    this.getUserHash();
  }

  getUserHash = (_) => {
    
   
    console.log('HI!')
  }

  getRecipes = (_) => {
    fetch('http://localhost:4002/recipes')
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  render() {
    
    return (
      <div>
      <GetUser/>
      <Container>
        <Row>
          <Jumbotron>
            <h1>Welcome In!</h1>
              <p>Welcome in to your cabinet.</p>
              <p>
              Feel free to browse the site and{' '}
              <a href="\recipes">review our recipes.</a>
              </p>
              <p>
              Or you can start to <a href="\recipes">fill your cabinet</a> so
              you can receive custom recipes.
             </p>
          </Jumbotron>
        </Row>
      </Container>
      </div>
    );
  }
});
