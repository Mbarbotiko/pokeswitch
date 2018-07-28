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



  render() {
    return (
      <Wrapper>
        <Title>Pokemon Memory</Title>
        {this.state.pokemon.map(poke => (
          <Pokemon
            id={poke.id}
            key={poke.id}
            image={poke.image}
          />
        ))}
      </Wrapper>
    );
  }
};



export default App;
