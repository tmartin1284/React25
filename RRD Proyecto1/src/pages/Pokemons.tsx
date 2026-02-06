import { useEffect, useState } from "react";
import { type Pokemon } from "../types/interfaces";
import { getPokemons } from "../services/accesoPokeapi";
//import { Link } from "react-router-dom";
import type { estadoCarga } from "../types/interfaces";
import PokemonList from "../components/PokemonList";

export default function Pokemons() {
  //tenemos dos estados: uno es la lista de pokemons y otro es el estado de carga

  const [pokemonsList, setPokemonsList] = useState<Pokemon[]>([]); //estado para la lista de pokemons
  const [estado, setEstado] = useState<estadoCarga>("inicio"); //estado para la carga de datos

  useEffect(() => {
    let isMounted = true;

    const cargarPokemons = async () => {
      if (!isMounted) return;

      try {
        setEstado("cargando");
        const data = await getPokemons();
        if (isMounted && data) setPokemonsList(data);
        setEstado("completo");
      } catch (err) {
        if (isMounted) setEstado("Fallo al cargar Pokemons." + err);
      } finally {
        if (isMounted && estado === "cargando") setEstado("completo");
      }
    };

    cargarPokemons();

    return () => {
      isMounted = false;
    };
  }, []);

  if (estado === "inicio" || estado === "cargando")
    return (
      <p style={{ background: "orange" }}>
        Cargando pokemons. Son muchos no tengas prisa
      </p>
    );
  if (estado.startsWith("Fallo"))
    return <p style={{ background: "red" }}> {estado}</p>;
  //o podemos redirigir a la página de error PokeError pasándole el mensaje de error
  //return <PokeError error={estado} />;

  if (estado === "completo")
    return (
      <>
        <div style={{ background: "Plum" }}>
          <h1>listado de pokemons</h1> pokemons
          {
            //   {pokemonsList?.map((pokemon) => (
            //     <li key={pokemon.name}>
            //       <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name} </Link>
            //     </li>
            //   ))}
            // </ul> */
            <PokemonList pokemonsList={pokemonsList} />
          }
        </div>
      </>
    );
}
