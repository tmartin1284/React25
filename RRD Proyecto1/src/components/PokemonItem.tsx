import { type Pokemon } from "../types/interfaces";
import { Link } from "react-router-dom";

export default function PokemonItem({ pokemon }: { pokemon: Pokemon }) {
  return (
    <li key={pokemon.name} style={{ background: "PapayaWhip" }}>
      <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name} </Link>
    </li>
  );
}
