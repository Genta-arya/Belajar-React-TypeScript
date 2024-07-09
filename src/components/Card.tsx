import React, { useEffect } from "react";
import { PokemonCard } from "../Types/Types";
import { motion } from "framer-motion";

const Card = (props: PokemonCard) => {
  const { pokemon, handlePokemonClick } = props;

  const capitalizeFirstLetter = (string: string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  useEffect(() => {
    // Scroll ke atas saat komponen pertama kali mount
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="grid grid-cols-2 lg:px-20 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6 md:gap-6 lg:gap-6 gap-3">
      {pokemon.map((poke, index) => (
        <motion.div
          key={poke.id}
          className="bg-white border rounded-lg flex flex-col items-center cursor-pointer transition-shadow duration-300 ease-in hover:shadow-2xl hover:shadow-purple-500"
          onClick={() => handlePokemonClick(poke)}
          initial={{ opacity: 0, y: 20 }} // Initial state
          animate={{ opacity: 1, y: 0 }}   // Final state
          transition={{ delay: index * 0.1, duration: 0.5 }} // Delay per index
        >
          <img
            src={poke.sprites.front_default}
            alt={poke.name}
            className="w-32 h-32 object-cover mb-4 rounded-lg border-gray-200"
          />
          <div className="bg-purple-500 w-full p-2 flex justify-center rounded-t-md">
            <h2 className="lg:text-xl md:text-xl text-sm font-semibold font-serif text-white">
              {capitalizeFirstLetter(poke.name)}
            </h2>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
