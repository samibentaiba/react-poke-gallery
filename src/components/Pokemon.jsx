// src/components/Pokemon.js

import React from 'react';

function Pokemon({ name, image, types }) {
  return (
    <div className="pokemon-card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <p>Types: {types.join(', ')}</p>
    </div>
  );
}

export default Pokemon;