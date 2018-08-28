import React from "react";
import "./Pokemon.css";

const PokemonImage = props => (
    <div className="card text-white bg-light mb-3"
        onClick={() => 
            props.randomPokemon(props.id)+
            console.log(props.id)}
            >
            <img alt={props.id} src={props.image} />

            
    
    </div>

);



export default PokemonImage;

