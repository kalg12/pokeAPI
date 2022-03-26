import React from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {

  const fetchPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon?limit=20"
    );
    const data = await response.json();
    console.log(data);
  };

  const obtenerImagenPokemon = async () => {
    const response = await fetch(
      "https://pokeapi.co/api/v2/pokemon/1"
    );
    const data = await response.json();
    console.log(data);
  };

  fetchPokemon();
  obtenerImagenPokemon();

  return (
    <>
      <Navbar />
      <Home />
    </>
  );
}

export default App;