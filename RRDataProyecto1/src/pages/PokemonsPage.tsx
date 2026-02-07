import { type Pokemon } from "../types/interfaces";
import { useLoaderData } from "react-router-dom";
//import { Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";

export default function Pokemons() {
  const pokemonsList = useLoaderData() as Pokemon[];

  return <PokemonList pokemonsList={pokemonsList} />;
}
