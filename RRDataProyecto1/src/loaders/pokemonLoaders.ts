import type { LoaderFunctionArgs } from "react-router";
import { getPokemons, getPokemonByID } from "../services/accesoPokeapi";

export async function pokemonsLoader() {
  return await getPokemons();
}

export async function pokemonDetalleLoader({ params }: LoaderFunctionArgs) {
  const pokemonId = params.pokemonId;

  if (!pokemonId) {
    throw new Response("Pokemon ID not provided", { status: 400 });
  }

  return await getPokemonByID(pokemonId);
}
