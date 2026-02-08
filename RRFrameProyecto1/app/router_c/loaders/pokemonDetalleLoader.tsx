import { getPokemonByID } from "../../services/accesoPokeapi";
import type { LoaderFunctionArgs } from "react-router-dom";

export async function pokemonDetalleLoader({ params }: LoaderFunctionArgs) {
  const pokemonId = params.pokemonId;

  if (!pokemonId) {
    throw new Response("Pokemon ID not provided", { status: 400 });
  }

  return await getPokemonByID(pokemonId);
}
