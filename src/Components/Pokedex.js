import React from "react";
import { useEffect, useState } from "react";
import Pokemon from "./Pokemon";
import { capitalize } from "../helpers/strings";
import {
  Grid,
  Box,
  ListItem,
  List,
  ListItemText,
  Container,
} from "@mui/material";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  listItem: {
    backgroundColor: "#343434",
    color: "white",
    "&:hover": {
      backgroundColor: "#5b5b5b",
    },
  },
}));

function Pokedex() {
  const [pokemonList, setPokemonList] = useState([]);
  const [selectedPokemon, setSelectedPokemon] = useState("");
  const classes = useStyles();

  const selectPokemon = (pokemon) => {
    setSelectedPokemon(pokemon);
  };

  useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=151")
      .then((response) => response.json())
      .then((data) => setPokemonList(data.results));
  }, []);

  return (
    <Container sx={{ m: "2rem auto" }} maxWidth="lg" className="PokedexApp">
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={6} sx={{ overflowY: "scroll", maxHeight: "80vh" }}>
            <List>
              {pokemonList.map((poke) => (
                <ListItem
                  className={classes.listItem}
                  key={poke.name}
                  onClick={() => selectPokemon(poke.name)}
                >
                  <ListItemText>{capitalize(poke.name)}</ListItemText>
                </ListItem>
              ))}
            </List>
          </Grid>
          <Grid item xs={6}>
            {selectedPokemon ? <Pokemon name={selectedPokemon} /> : null}
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
}

export default Pokedex;
