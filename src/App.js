import React, { Component } from 'react';
import './App.css';
import pokemon from "./pokemon.json";
import Title from "./components/Title";
import Wrapper from "./components/Wrapper";
import Pokemon from "./components/Pokemon";
import Scoreboard from "./components/Scoreboard";
// import MySmallModal from "./components/Modal";
// import { ButtonToolbar} from 'react-bootstrap';
// import { Button} from 'react-bootstrap';
// import { Modal} from 'react-bootstrap';

class App extends Component {
  state = {
    pokemon,
    score:0
   
  };

  randomPokemon = () => {
    this.state.pokemon.sort(() => Math.random() - 0.5)
    console.log(pokemon)
    this.setState({ pokemon });
    
  };


//    updateVeryNestedField=(state, action)=>{
//     return {
//         ...state,
//         first : {
//             ...state.first,
//             second : {
//                 ...state.first.second,
//                 [action.someId] : {
//                     ...state.first.second[action.someId],
//                     fourth : action.someValue
//                 }
//             }
//         }
//     }
// } use this to "push" to a "new" array, its a method called spread that alters the state without mutating/ changing the original, can use this to collect ID from the onclicks and then do an if else afterwards



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
        <Scoreboard/>
      </Wrapper>
    );
  }
};



export default App;
