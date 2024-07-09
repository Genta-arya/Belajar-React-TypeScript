import React from "react";
import { AnimatePresence, motion } from "framer-motion";
import useGetPokemon from "../Hooks/ListPokemon/useGetPokemon";
import ModalDetail from "./ModalDetail";
import Pagination from "./Pagination";
import Loading from "./Loading";
import Card from "./Card";
import Error from "./Error";

const PokemonList = () => {
  const {
    closeModal,
    fetchPokemon,
    error,
    handleNext,
    handlePokemonClick,
    handlePrevious,
    loading,
    offset,
    limit,
    pokemon,
    selectedPokemon,
  } = useGetPokemon();

  if (loading) return <Loading />;

  return (
    <div className="container mx-auto px-4 py-8">
      {error ? (
        <Error error={error} fetchPokemon={fetchPokemon} />
      ) : (
        <>
          <Card pokemon={pokemon} handlePokemonClick={handlePokemonClick} />

          <Pagination
            offset={offset}
            limit={limit}
            onNext={handleNext}
            onPrevious={handlePrevious}
          />

          {/* Modal */}
          <AnimatePresence>
            {selectedPokemon && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 backdrop-blur-sm"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <ModalDetail
                  key="modal"
                  closeModal={closeModal}
                  selectedPokemon={selectedPokemon}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </>
      )}
    </div>
  );
};

export default PokemonList;
