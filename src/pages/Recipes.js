import React, { Component } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Jumbotron from 'react-bootstrap/Jumbotron';
import SpiceSearch from '../components/SpiceSearch';
var randomstring = require("randomstring");



export default (class Recipes extends Component {
  constructor(props) {
    super(props);
    this.state = { recipes: [], searchOptions: [], searchArray: '', nonechecked: 0, header: "All Recipes" };
  }

  componentDidMount() {
    const searchArray = sessionStorage.getItem('searchArray');
    console.log(searchArray)
    this.setState({searchArray})
    this.getAllRecipes()
  }

  getAllRecipes = (_) => {
    fetch('http://localhost:4002/recipes')
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  handleSearch() {
    let isSelected = sessionStorage.selectedItems
    console.log(isSelected)
    let updatedArray = sessionStorage.searchArray
    console.log(updatedArray)
    let newSearchOptions = []
    JSON.parse(updatedArray).forEach((element, index, array) => {
      var elemental = element.value;
      console.log(elemental);
      newSearchOptions.push(elemental)
      console.log(newSearchOptions)
    })
    const stringSearch = newSearchOptions.toString().replace(/,/g, "' OR '")
    console.log(stringSearch)
    fetch(`http://localhost:4002/recipes/search?search=${stringSearch}`)
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  }  

  getRecipes = (_) => {
    const searchoptions = this.state.searchoptions;
    console.log(searchoptions);
    fetch(`http://localhost:4002/search?search=${searchoptions}`)
      .then((response) => response.json())
      .then((response) => this.setState({ recipes: response.data }))
      .catch((err) => console.error(err));
  };

  displayRecipes = (_) => {
    const selectItems = sessionStorage.selectedItems
    console.log(randomstring.generate())
    if (selectItems.length === 2) {
      this.setState({header: "All Recipes"})
      this.getAllRecipes()
    } else {
      this.handleSearch()
      this.setState({header: "Recipe Results"})
    }
  }

  render() {
    const { recipes } = this.state;
  
    return (
      <div>
        <SpiceSearch onChildChange={this.displayRecipes}/>
        

        <Container>
          <Row>
            <Jumbotron>
              <h1>{this.state.header}</h1>

              {recipes.map((row) => (
                <div key={randomstring.generate()}>
                  <h3>{row.recipe_name}</h3>
                  <p>Inredients:</p>
                  <ul >
                    {JSON.parse(row.recipe_ingredients_json).ingredients.map(
                      (ing) => (
                        <li key={randomstring.generate()}>
                          {ing.amount} {ing.unit} {ing.ingredient_name}
                        </li>
                      ),
                    )}
                  </ul>

                  <p>Steps:</p>
                  <ol >
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
