import { useLoaderData } from "react-router";
import type { Pokemon } from "../types/interfaces";
import PokemonCard from "../components/PokemonCard";

export default function DetallePokemon() {
  const pokemon = useLoaderData() as Pokemon;

  return <PokemonCard pokemon={pokemon} />;
}
