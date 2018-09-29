import React from "react";
import "./Pokemon.css";

const PokemonImage = props => (
    <div className="card text-white bg-light mb-3"
        onClick={() => 
            props.randomPokemon(props.id)}>
            <img alt={props.name} src={props.image} />

            {/*     PokeMon image created here then , passed it properties from the JSON file using the mapmethod that is called during the onclick of this image randomPokemon= handle onclick function written in app.js on render giving the pokemon cards properties if ID and Image link to render the picture as well as a key*/}
    
    </div>

);



export default PokemonImage;

