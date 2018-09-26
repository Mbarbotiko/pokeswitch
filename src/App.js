import React, { Component } from 'react';
import './App.css';
import pokemon from "./pokemon.json";
import Title from "./components/Title";
import Instructions from "./components/Instructions";
import Wrapper from "./components/Wrapper";
import PokemonImage from "./components/Pokemon";
import Scoreboard from "./components/Scoreboard";

class App extends Component {
  state = {
    pokemon,
    score: 0,
    topScore: 0

  };

  componentDidMount() {
    this.setState({ pokemon: this.shufflePokemon(this.state.pokemon) });
  }

  shufflePokemon = pokemon => {
    let i = pokemon.length - 1;
    while (i > 0) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = pokemon[i];
      pokemon[i] = pokemon[j];
      pokemon[j] = temp;
      i--;
    }
    return pokemon;
  };
  //function to ranomely display pokemon

  correctGuessHandler = newPokemon => {
    const { topScore, score } = this.state;
    const newScore = score + 1;
    const newTopScore = newScore > topScore ? newScore : topScore;
    this.setState({
      pokemon: this.shufflePokemon(newPokemon),
      score: newScore,
      topScore: newTopScore
    });
  };
  //if the user chooses a pokemon that hasnt been clicked yet set the score +1, if the new score is higher than the top score set the top score to the new score, execute function to mix up pokemon.


  incorrectGuessHandler = pokemon => {
    this.setState({
      pokemon: this.resetPokemon(pokemon),
      score: 0
    });
  };

  //if the incorrect pokemon has been chosen (a previously clicked pokemon) reset the score and the pokemon logged.


  resetPokemon = pokemon => {
    const resetPokemon = pokemon.map(item => ({ ...item, clicked: false }));
    return this.shufflePokemon(resetPokemon);
  };

  //function for resetting pokemon that are logged during user clicks , cycle through the pokemon data, change them to false versus true

  handlePokemonClick = id => {
    let guessedCorrectly = false;
    console.log(guessedCorrectly);
    const newPokemon = this.state.pokemon.map(item => {
      const newItem = { ...item };
      console.log(newItem);
      if (newItem.id === id) {
        if (!newItem.clicked) {
          newItem.clicked = true;
          guessedCorrectly = true;
        }

      } return newItem
    });
    guessedCorrectly
      ? this.correctGuessHandler(newPokemon)
      : this.incorrectGuessHandler(newPokemon);
  }

  //changing pokemon that are clicked to true copying the object into "items" to check against if the user guessed Correctly run the correct guess function, if now run the incorect guess function.


  render() {
    return (
      <div>
        <Title>Pokemon Memory</Title>
        <Instructions>Test your memory, click on each picture only once, get through all 12 and you will win a sense of pride</Instructions>
        <Wrapper>
        {this.state.pokemon.map(item => (
          <PokemonImage
            randomPokemon={this.handlePokemonClick}
            id={item.id}
            key={item.id}
            image={item.image}

          />
        ))}
        <Scoreboard score={this.state.score} topScore={this.state.topScore} />
      </Wrapper>
      </div>
    );
  }
};



export default App;
