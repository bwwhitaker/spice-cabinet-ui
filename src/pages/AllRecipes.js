import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';

export default (class AllRecipes extends Component {
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
            <h1>All Recipes:</h1>
            {recipes.map((row) => (
              <div>
                <h3>{row.recipe_name}</h3>
                <p>
                  Inredients:
                  <ul>
                    {JSON.parse(row.recipe_ingredients_json).ingredients.map(
                      (ing) => (
                        <li>
                          {ing.amount} {ing.unit} {ing.ingredient_name}
                        </li>
                      ),
                    )}
                  </ul>
                </p>
                <p>
                  Steps:
                  <ol>
                    {JSON.parse(row.recipe_instructions_json).steps.map(
                      (step) => (
                        <li>{step.actions}</li>
                      ),
                    )}
                  </ol>
                </p>
              </div>
            ))}
          </Jumbotron>
        </Row>
      </Container>
    );
  }
});
