import React from "react";
import { useEffect, useState } from "react";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="PokedexApp">
      <ul>
        {pokemonList.map((poke) => (
          <li>{poke.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
