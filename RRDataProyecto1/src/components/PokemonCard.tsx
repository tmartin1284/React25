import type { Pokemon } from "../types/interfaces";


export default function DetallePokemon({ pokemon }: { pokemon: Pokemon }) {
 
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
          <li>
            Habilidades:{" "}
            {pokemon?.abilities
              ?.map((ability) => ability.ability.name)
              .join(", ")}
          </li>
          <li>
            Movimientos:{" "}
            {pokemon?.moves?.map((move) => move.move.name).join(", ")}
          </li>
          <li>Formas: {pokemon?.forms?.map((form) => form.name).join(", ")}</li>
          <li>Experiencia base: {pokemon?.base_experience}</li>
        </ul>
      </div>
    );
}
