export type Pokemon = {
  name: string;
  url: string;
};

export type PokemonDetail = Pokemon & {
  id: number;
  height: number;
  weight: number;
  sprites: {
    back_default: string;
    back_female: string;
    back_shiny: string;
    back_shiny_female: string;
    front_default: string;
    front_female: string;
    front_shiny: string;
    front_shiny_female: string;
    other: {
      dream_world: {
        front_default: string;
      };
    };
  };
  abilities: Ability[];
};

export type ImageCarouselProps = {
  sprites: PokemonDetail["sprites"]; // Menggunakan tipe dari PokemonDetail
};

export type Ability = {
  ability: {
    name: string;
    url: string;
  };
  is_hidden: boolean;
  slot: number;
};

export type ModalDetailProps = {
  closeModal: () => void;
  selectedPokemon: PokemonDetail;
};

export type PaginationProps = {
  offset: number;
  limit: number;
  onPrevious: () => void;
  onNext: () => void;
};

export interface PokemonCard {
  pokemon: PokemonDetail[];
  handlePokemonClick: (pokemon: PokemonDetail) => void;
}
