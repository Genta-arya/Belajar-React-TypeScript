import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSyncAlt } from "@fortawesome/free-solid-svg-icons";

// Define the type for the props
interface ErrorProps {
  error: {
    message: string;
  };
  fetchPokemon: () => void;
}

const Error: React.FC<ErrorProps> = ({ error, fetchPokemon }) => {
  return (
    <div className=" text-xl text-red-500 flex  items-center h-screen justify-center">
      <div className="">
        <p className="font-bold text-sm md:text-base lg:text-base">
          Gagal Mendapatkan Koleksi Pokemon
        </p>
        <div className="mt-4 text-center">
          <button
            className="bg-purple-500 text-white px-4 py-2 rounded-md shadow-md hover:bg-purple-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={fetchPokemon}
          >
            <div className="flex justify-center gap-2 items-center text-sm lg:text-base md:text-base ">
              <FontAwesomeIcon icon={faSyncAlt} className="" />
              <p>Coba Lagi</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Error;
