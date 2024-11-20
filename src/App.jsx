// src/App.js
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import React from 'react';
import PokeGallery from './components/PokeGallery';
import './styles.css';  // Optional for styling

function App() {
  return (
    <div className="App">
      <h1>Pokémon Gallery</h1>
      <PokeGallery />
    </div>
  );
}

export default App;

