// Hooks/ListPokemon/useGetPokemon.ts
import { useEffect, useState } from "react";
import { getDataPokemon, getPokemonDetail } from "../../service/api/PokemonApi";
import { PokemonDetail } from "../../Types/Types";
import useSortStore from "../../Utils/Zustand";

// Custom hook untuk mendapatkan Pokémon dan detailnya
const useGetPokemon = () => {
  const [pokemon, setPokemon] = useState<PokemonDetail[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);
  const [offset, setOffset] = useState<number>(0);
  const [selectedPokemon, setSelectedPokemon] = useState<PokemonDetail | null>(
    null
  );
  const limit = 24;
  const { sortOrder } = useSortStore();
  const fetchPokemon = async () => {
    setLoading(true);
    try {
      const initialData = await getDataPokemon(offset, limit);

      const detailedData = await Promise.all(
        initialData.map(async (poke) => {
          const detail = await getPokemonDetail(poke.url);
          return {
            ...detail,
          };
        })
      );

      // Sort data based on sortBy
      if (sortOrder === "name-asc") {
        detailedData.sort((a, b) => a.name.localeCompare(b.name));
      } else if (sortOrder === "name-desc") {
        detailedData.sort((a, b) => b.name.localeCompare(a.name));
      }

      setPokemon(detailedData);
      setError(null);
    } catch (error) {
      if (error instanceof Error) {
        setError(error);
      } else {
        setError(new Error("An unknown error occurred"));
      }
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPokemon();
  }, [offset, sortOrder]); // Tambahkan sortOrder sebagai dependensi
  const handleNext = () => {
    setOffset((prevOffset) => prevOffset + limit);
  };

  const handlePrevious = () => {
    setOffset((prevOffset) => Math.max(prevOffset - limit, 0));
  };

  const handlePokemonClick = (poke: PokemonDetail) => {
    setSelectedPokemon(poke);
  };

  const closeModal = () => {
    setSelectedPokemon(null);
  };

  return {
    pokemon,
    loading,
    error,
    offset,
    handleNext,
    handlePrevious,
    handlePokemonClick,
    closeModal,
    selectedPokemon,
    limit,
    fetchPokemon,
  };
};

export default useGetPokemon;
