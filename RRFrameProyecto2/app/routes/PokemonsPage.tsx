import { type PokemonBasic } from "../types/interfaces";
import { useLoaderData } from "react-router";
import { Link } from "react-router";
import PokemonList from "../components/PokemonList";
import type { Route } from "../+types/root";
import "../App.css";

/*
Esta función antes se llamaba 
export async function pokemonsLoader() {
y estaba en el archivo pokemonsLoader.tsx, pero ahora lo he movido a esta misma ruta y lo exporto desde aqui, para que quede todo mas ordenado y no tener tantos archivos sueltos
cuidao, porque tiene que tener un nombre específico, porque el componente lo va a llamar desde dentro, y si no se llama así, no lo encuentra, y da error

*/
//Carga en el servidor
export async function loader({ params }: Route.LoaderArgs) {
  //carga en el cliente, pero como el componente lo llama desde dentro, no hace falta que le pasemos nada, porque el componente ya sabe que tiene que llamar a esta función para obtener los datos, y esta función ya sabe que tiene que hacer la petición a la API para obtener los datos, y luego devolverlos al componente, que es lo que hace useLoaderData
  //export async function clientLoader({ params }: Route.LoaderArgs) {
  const API_URL = "https://pokeapi.co/api/v2/pokemon";
  try {
    const response = await fetch(API_URL);

    const data = await response.json();
    if (!response.ok) {
      console.log("Error fetching Pokemons:", data);
      throw new Response(`Not Found   `, { status: 404 });
    }
    console.log("Data fetched from PokeAPI:", data.results);
    return data.results;
  } catch (error) {
    console.log("Error fetching Pokemons:", error);
    throw new Response(`Not Found   `, { status: 405 });
  }
}

//-------------------------------

export default function PokemonsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const pokemonsList = useLoaderData() as PokemonBasic[];

  return <PokemonList pokemonsList={pokemonsList} />;
}
