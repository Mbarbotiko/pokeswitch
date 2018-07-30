import React, { Component } from 'react';
import './App.css';
import pokemon from "./pokemon.json";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Pokemon from "./components/Pokemon";

class App extends Component {
  state = {
    pokemon
   
  };

  randomPokemon = () => {
    this.state.pokemon.sort(() => Math.random() - 0.5)
    this.setState({ pokemon });
  };


  render() {
    return (
      <Wrapper>
        <Title>Pokemon Memory</Title>
        {this.state.pokemon.map(poke => (
          <Pokemon
          randomPokemon={this.randomPokemon}
            id={poke.id}
            key={poke.id}
            image={poke.image}
            name={poke.name}
          />


        ))}
      </Wrapper>
    );
  }
};



export default App;
