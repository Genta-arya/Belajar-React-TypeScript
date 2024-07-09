import React from "react";
import PokemonList from "./components/ListPokemon";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const App = () => {
  return (
    <React.Fragment>
      <Navbar />
      <PokemonList />
      <Footer />
    </React.Fragment>
  );
};

export default App;
