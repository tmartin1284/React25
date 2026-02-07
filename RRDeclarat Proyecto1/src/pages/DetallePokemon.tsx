import { useEffect, useState } from "react";
import { redirect, useParams } from "react-router-dom";
import type { Pokemon } from "../types/interfaces";
import { getPokemonByID } from "../services/accesoPokeapi";
import type { estadoCarga } from "../types/interfaces";

export default function DetallePokemon() {
  const { pokemonId } = useParams<{ pokemonId: string }>();

  const [pokemon, setPokemon] = useState<Pokemon | null>(null);
  const [estado, setEstado] = useState<estadoCarga>("inicio");

  useEffect(() => {
    let isMounted = true;

    const cargaPokemon = async () => {
      if (!pokemonId) {
        setEstado("No hay ID de pokemon");
        redirect("/pokeerror/No%20existe%20ese%20pokemon");
        return;
      }

      try {
        setEstado("cargando");
        const data = await getPokemonByID(pokemonId);
        if (isMounted && data) setPokemon(data);
        setEstado("completo");
        console.log("Pokemons cargados");
      } catch (err) {
        if (isMounted) setEstado("Fallo al cargar Pokemons." + err);
      } finally {
        if (isMounted && estado === "cargando") setEstado("completo");
      }
    };

    cargaPokemon();

    return () => {
      isMounted = false;
    };
  }, [pokemonId]);

  if (estado === "inicio" || estado === "cargando")
    return (
      <p style={{ background: "orange" }}>
        Cargando pokemons. Son muchos no tengas prisa
      </p>
    );
  if (estado.startsWith("Fallo"))
    return (
      <p style={{ background: "red" }}>Error cargando pokemons: {estado}</p>
    );
  //o podemos redirigir a la página de error PokeError pasándole el mensaje de error
  //return <PokeError error={estado} />;

  if (estado === "completo")
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
