import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ pokemon }) {
  const [isClicked, setIsClicked] = useState(false);
  const capitalized = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
  return (
    <Card>
      <div onClick={() => setIsClicked(!isClicked)}>
        <div className="image">
          <img alt={pokemon.name} src={isClicked ? pokemon.sprites.back : pokemon.sprites.front} />
        </div>
        <div className="content">
          <div className="header">{capitalized}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {pokemon.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
