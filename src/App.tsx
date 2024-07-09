import React from "react";
import PokemonList from "./components/ListPokemon";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PokemonList />
    </React.Fragment>
  );
};

export default App;
