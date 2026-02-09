//este archivo no se ha editado respecto a la versión decl
//en la version framework hay que quitarlo

import type { Pokemon, PokemonBasic } from "./app/types/interfaces";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(): Promise<PokemonBasic[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const data = await response.json();
  console.log("Data fetched from PokeAPI:", data.results);
  return data.results;
}

export async function getPokemonByID(
  idPokemon: string,
): Promise<Pokemon | null> {
  const response = await fetch(`${API_URL}/${idPokemon}`);
  if (!response.ok) {
    throw new Error("Error fetching pokemon by ID");
  }
  return response.json();
}
