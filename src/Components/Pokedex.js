import React from "react";
import { useEffect, useState } from "react";
import {
  Link
} from "react-router-dom";

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <div className="PokedexApp">
      <ul>
        {pokemonList.map((poke) => (
          <li>
            <Link
              to={{
                pathname: `/pokemon/${poke.name}`
              }}
            >
              {poke.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Pokedex;
