import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonData, setPokemonData] = useState([]);
  const [displayPokemon, setDisplayPokemon] = useState([]);
  const [searchedValue, setSearchedValue] = useState("");

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("http://localhost:3001/pokemon");
        const pokemonDataFromFetch = await response.json();
        setPokemonData(pokemonDataFromFetch);
        setDisplayPokemon(pokemonDataFromFetch);
      } catch (error) {
        console.alert(error);
      }
    }
    fetchData();
  }, []);

  useEffect(() => {
    const filteredPokemon = pokemonData.filter((pokemon) => {
      return pokemon.name.toLowerCase().includes(searchedValue.toLowerCase());
    });
    setDisplayPokemon(filteredPokemon);
  }, [searchedValue]);

  function searchForPokemon(e) {
    setSearchedValue(e.target.value);
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm setDisplayPokemon={setDisplayPokemon} displayPokemon={displayPokemon} />
      <br />
      <Search searchedValue={searchedValue} onSearch={searchForPokemon} />
      <br />
      <PokemonCollection displayPokemon={displayPokemon} />
    </Container>
  );
}

export default PokemonPage;
