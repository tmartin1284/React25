import { type PokemonBasic } from "../types/interfaces";
import { Link } from "react-router";
import "../App.css";

function corazonzito(pokemonName: string) {
  const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

  // Verificar si ya está en favoritos
  if (favorites.includes(pokemonName)) {
    pokemonName = "❤️ " + pokemonName + " ❤️";
  }
  return pokemonName;
}

export default function PokemonItem({ pokemon }: { pokemon: PokemonBasic }) {
  return (
    <li key={pokemon.name} style={{ background: "PapayaWhip" }}>
      <Link to={`/pokemons/${pokemon.name}`}>{corazonzito(pokemon.name)}</Link>
    </li>
  );
}
