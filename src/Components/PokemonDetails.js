import React from "react";
import { capitalize } from "../helpers/strings";
import Pokemon from "./Pokemon";

function PokemonDetails(props) {
  console.log(props.pokemon);
  return (
    <div>
      <h1>{capitalize(props.pokemon.name)}</h1>
      <img src={props.pokemon.sprites.front_default} />
      <div>Height: {props.pokemon.height}</div>
      <div>Base XP: {props.pokemon.base_experience}</div>
      <div>Weight: {props.pokemon.weight}</div>
      <div>Type: {props.pokemon.type}</div>
      <input type="submit" value="Add to Team" />
    </div>
  );
}

export default PokemonDetails;
