import React, {useState} from "react";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";

function App() {
  const [pokemon, setPokemon] = useState([]);

  React.useEffect(() => {
    fetch("https://pokeapi.co/api/v2/pokemon/?limit=151")
      .then(response => response.json())
      .then(data => setPokemon(data.results))
      .catch(error => console.log(error));
      console.log(pokemon);
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Home pokemon={pokemon} />
    </div>
  );
}

export default App;