import React from "react";
import PokemonDetails from "./PokemonDetails";
import { useEffect, useState } from "react";

function Pokemon(props) {
  let [pokemon, setPokemon] = useState({});

  useEffect(() => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${props.name}`)
      .then((response) => response.json())
      .then((data) => setPokemon(data));
  }, [pokemon]);

  return (
    <div>
      {pokemon.name ? (
        <PokemonDetails pokemon={pokemon} />
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default Pokemon;
