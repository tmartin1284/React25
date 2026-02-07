import { type Pokemon } from "../types/interfaces";
import PokemonItem from "./PokemonItem";

export default function PokemonList({
  pokemonsList,
}: {
  pokemonsList: Pokemon[];
  }) {
  
  if (!pokemonsList || pokemonsList.length === 0) {
    return <p style={{ background: "LightCoral" }}>No hay pokemons para mostrar</p>;
  }



  return (
    <div style={{ background: "LightPink" }}>
      <h2> Lista de Pokemons pokemonList </h2>
      <ul>
        {pokemonsList?.map((pokemon) => (
     
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}
