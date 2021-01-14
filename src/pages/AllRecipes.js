import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SpiceSearch from '../components/SpiceSearch';

export default (class AllRecipes extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [], searchoptions: [] };
  }

  componentDidMount() {
    this.getRecipes();
    this.getSearchOptions();
  }

  getRecipes = (_) => {
    fetch('http://localhost:4002/allrecipes')
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  getSearchOptions = (_) => {
    const searchOptions = localStorage.getItem('searchOptions');
    console.log(searchOptions);
    const jsonify = searchOptions.split(',');
    const json_searchOptions = JSON.stringify(jsonify);
    this.setState({ searchoptions: json_searchOptions });
  };

  render() {
    const { recipes } = this.state;
    console.log(this.state.recipes);

    return (
      <div>
        <SpiceSearch />

        <Container>
          <Row>
            <Jumbotron>
              <h1>All Recipes:</h1>

              {recipes.map((row) => (
                <div>
                  <h3>{row.recipe_name}</h3>
                  <p>Inredients:</p>
                  <ul>
                    {JSON.parse(row.recipe_ingredients_json).ingredients.map(
                      (ing) => (
                        <li key={ing.recipe_id}>
                          {ing.amount} {ing.unit} {ing.ingredient_name}
                        </li>
                      ),
                    )}
                  </ul>

                  <p>Steps:</p>
                  <ol>
                    {JSON.parse(row.recipe_instructions_json).steps.map(
                      (step) => (
                        <li key={step.step}>{step.actions}</li>
                      ),
                    )}
                  </ol>
                </div>
              ))}
            </Jumbotron>
          </Row>
        </Container>
      </div>
    );
  }
});
