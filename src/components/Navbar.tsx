import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSortAlphaDown,
  faSortAlphaUp,
} from "@fortawesome/free-solid-svg-icons";
import useSortStore from "../Utils/Zustand";

const Navbar: React.FC = () => {
  const { sortOrder, setSortOrder } = useSortStore();

  const handleSortChange = () => {
    setSortOrder(sortOrder === "name-asc" ? "name-desc" : "name-asc");
  };

  return (
    <nav className="bg-white p-4 border-b">
      <div className="container mx-auto flex md:flex-row lg:flex-row flex-col gap-2  justify-between items-center">
        <h1 className="text-3xl font-cartoon text-purple-800">
          Koleksi Pokemon
        </h1>
        <button
          onClick={handleSortChange}
          className={`py-2 px-4 text-xs md:text-base lg:text-base flex items-center rounded ${
            sortOrder === "name-asc"
              ? "bg-purple-500 text-white"
              : "bg-gray-200"
          }`}
        >
          <FontAwesomeIcon
            icon={sortOrder === "name-asc" ? faSortAlphaUp : faSortAlphaDown}
            className="mr-2"
          />
          Urutkan {sortOrder === "name-asc" ? "A-Z" : "Z-A"}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
