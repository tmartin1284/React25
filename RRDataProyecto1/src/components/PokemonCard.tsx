import type { Pokemon } from "../types/interfaces";

export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  if (!pokemon) {
    return <div>No hay datos de Pokémon</div>;
  }

  const abilities = (pokemon?.abilities || [])
    .map((ability) => {
      if (typeof ability?.ability?.name === "string") {
        return ability.ability.name;
      }
      return "";
    })
    .filter(Boolean)
    .join(", ");

  const moves = (pokemon?.moves || [])
    .map((move) => {
      if (typeof move?.move?.name === "string") {
        return move.move.name;
      }
      return "";
    })
    .filter(Boolean)
    .join(", ");

  const forms = (pokemon?.forms || [])
    .map((form) => {
      if (typeof form?.name === "string") {
        return form.name;
      }
      return "";
    })
    .filter(Boolean)
    .join(", ");

  return (
    <div style={{ background: "PaleGreen" }}>
      <img
        src={pokemon?.sprites?.front_default ?? undefined}
        height="200"
        width="200"
        alt={pokemon?.name}
      />
      <h1>
        {pokemon?.id} {pokemon?.name}
      </h1>
      <ul>
        <li>Habilidades: {abilities || "N/A"}</li>
        <li>Movimientos: {moves || "N/A"}</li>
        <li>Formas: {forms || "N/A"}</li>
        <li>Experiencia base: {pokemon?.base_experience}</li>
      </ul>
    </div>
  );
}
