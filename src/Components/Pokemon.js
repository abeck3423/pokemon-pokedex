import React from "react";
import PokemonDetails from "./PokemonDetails";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function Pokemon() {
    const [pokemon, setPokemon] = useState({});
    const { name } = useParams()

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .then((response) => response.json())
        .then((data) => setPokemon(data) )
    }, []);

    return (
        <div>
            {pokemon.name ? <PokemonDetails pokemon={pokemon} /> : <h2>Loading...</h2>}
        </div>
    );
}

export default Pokemon;
