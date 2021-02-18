import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SpiceSearch from '../components/SpiceSearch';

export default (class Results extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [], searchoptions: '' };
  }

  componentDidMount() {
    this.handleSearch();
  }

  handleSearch() {
    setTimeout(this.getSearchOptions, 50);
    setTimeout(this.getRecipes, 50);
  }

  getSearchOptions = (_) => {
    const searchOptions = localStorage.getItem('searchOptions');
    console.log(searchOptions);
    const jsonify = searchOptions.replace(/,/g, "' OR '");
    console.log(jsonify);
    const json_searchOptions = `${jsonify}`;
    console.log(json_searchOptions);
    this.setState({ searchoptions: json_searchOptions });
  };

  getRecipes = (_) => {
    const searchoptions = this.state.searchoptions;
    console.log(searchoptions);
    fetch(`http://localhost:4002/search?search=${searchoptions}`)
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  render() {
    const { recipes } = this.state;
    console.log(this.state.recipes);
    console.log(this.state.searchoptions);

    return (
      <div>
        <SpiceSearch />

        <Container>
          <Row>
            <Jumbotron>
              <h1>Filtered Recipes:</h1>

              {recipes.map((row) => (
                <div>
                  <h3 key={row.recipe_id}>{row.recipe_name}</h3>
                  <p>Inredients:</p>
                  <ul>
                    {JSON.parse(row.recipe_ingredients_json).ingredients.map(
                      (ing) => (
                        <li key={ing.id}>
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
