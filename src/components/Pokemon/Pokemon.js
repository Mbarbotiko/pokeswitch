import React from "react";
import "./Pokemon.css";

const PokemonImage = props =>(
    <div class="card text-white bg-light mb-3">
    <img alt={props.id} src={props.image}/>
    </div>

);



export default PokemonImage;

