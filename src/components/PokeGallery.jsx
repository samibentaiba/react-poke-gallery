// src/components/PokeGallery.js

import React from 'react';
import Pokemon from './Pokemon';

const pokeData = [
  {
    name: "Pikachu",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    types: ["Electric"]
  },
  {
    name: "Charmander",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    types: ["Fire"]
  },
  // Add 10 more Pokémon here
];

function PokeGallery() {
  return (
    <div className="poke-gallery">
      {pokeData.map((poke, index) => (
        <Pokemon key={index} name={poke.name} image={poke.image} types={poke.types} />
      ))}
    </div>
  );
}

export default PokeGallery;
