import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";
import { v4 as uuid } from "uuid";

function PokemonCollection({ displayPokemon }) {
  const displayPokemonMap = displayPokemon.map((pokemon) => {
    return <PokemonCard pokemon={pokemon} key={uuid()} />;
  });

  return <Card.Group itemsPerRow={6}>{displayPokemonMap}</Card.Group>;
}

export default PokemonCollection;
