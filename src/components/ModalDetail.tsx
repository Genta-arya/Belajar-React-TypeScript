import React from "react";
import { ModalDetailProps } from "../Types/Types";
import ImageCarausel from "./ImageCarausel";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

const ModalDetail: React.FC<ModalDetailProps> = ({
  closeModal,
  selectedPokemon,
}) => {
  return (
    <motion.div
      className="bg-white rounded-lg shadow-lg p-6 max-w-xs lg:max-w-2xl md:max-w-2xl w-full relative "
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      exit={{ scale: 0.8 }}
    >
      <div className="flex justify-between items-center gap-4 mb-12">
        <h2 className="text-3xl font-cartoon text-purple-500 font-bold">
          {selectedPokemon.name}
        </h2>
        <button
          onClick={closeModal}
          className="text-gray-600 hover:text-gray-900"
        >
          <FontAwesomeIcon icon={faTimes} size="xl" />
        </button>
      </div>

      <ImageCarausel sprites={selectedPokemon.sprites} />

      <div className="border-t p-2">
        <div className="mt-4">
          <h3 className="text-xl font-semibold mb-2">Kemampuan</h3>
          <ul className="list-disc list-inside">
            {selectedPokemon.abilities.map((ability, index) => (
              <li key={index} className="text-gray-700 mb-1">
                <span className="font-semibold">{ability.ability.name}</span>
                {ability.is_hidden && (
                  <span className="text-gray-500"> (Hidden)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default ModalDetail;
