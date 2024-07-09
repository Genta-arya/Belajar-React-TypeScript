import { Pokemon, PokemonDetail } from "../../Types/Types";
import { ConfigAxios } from "../AxiosInstance";

export const getDataPokemon = async (
  offset: number,
  limit: number = 20
): Promise<Pokemon[]> => {
  const axiosInstance = ConfigAxios();
  try {
    const response = await axiosInstance.get(
      `pokemon?offset=${offset}&limit=${limit}`
    );
    return response.data.results;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};

export const getPokemonDetail = async (url: string): Promise<PokemonDetail> => {
  const axiosInstance = ConfigAxios();
  try {
    const response = await axiosInstance.get(url);
    return {
      id: response.data.id,
      name: response.data.name,
      height: response.data.height,
      weight: response.data.weight,
      url: url,
      sprites: response.data.sprites,
      abilities: response.data.abilities.map(
        (ability: {
          ability: { name: string; url: string };
          is_hidden: boolean;
          slot: number;
        }) => ({
          ability: {
            name: ability.ability.name,
            url: ability.ability.url,
          },
          is_hidden: ability.is_hidden,
          slot: ability.slot,
        })
      ),
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
};
