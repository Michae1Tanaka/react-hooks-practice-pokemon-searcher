import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ setDisplayPokemon, displayPokemon }) {
  const [newPokemonForm, setNewPokemonForm] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: "",
      back: "",
    },
  });

  const handleInputChange = (event) => {
    if (event.target.name === "front" || event.target.name === "back") {
      setNewPokemonForm({
        ...newPokemonForm,
        sprites: {
          ...newPokemonForm.sprites,
          [event.target.name]: event.target.value,
        },
      });
    } else {
      setNewPokemonForm({
        ...newPokemonForm,
        [event.target.name]: event.target.value,
      });
    }
  };
  function handleNewPokemonSubmit(e) {
    e.preventDefault();
    async function postData() {
      try {
        const response = await fetch("http://localhost:3001/pokemon", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(newPokemonForm),
        });
        const newPokemon = await response.json();
        setDisplayPokemon([...displayPokemon, newPokemon]);
      } catch (error) {
        console.error("Error", error);
      }
    }
    postData();
  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form onSubmit={handleNewPokemonSubmit}>
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            value={newPokemonForm.name}
            onChange={handleInputChange}
            placeholder="Name"
            name="name"
          />
          <Form.Input
            fluid
            label="hp"
            value={newPokemonForm.hp}
            onChange={handleInputChange}
            placeholder="hp"
            name="hp"
          />
          <Form.Input
            fluid
            label="Front Image URL"
            value={newPokemonForm.sprites.front}
            onChange={handleInputChange}
            placeholder="url"
            name="front"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            value={newPokemonForm.sprites.back}
            onChange={handleInputChange}
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
