import { type PokemonBasic } from "../types/interfaces";
import { useLoaderData } from "react-router-dom";
//import { Link } from "react-router-dom";
import PokemonList from "../components/PokemonList";
import { type Route } from "../../.react-router/types/app/routes/+types/PokemonsPage.ts";

/*
Esta función antes se llamaba 
export async function pokemonsLoader() {
y estaba en el archivo pokemonsLoader.tsx, pero ahora lo he movido a esta misma ruta y lo exporto desde aqui, para que quede todo mas ordenado y no tener tantos archivos sueltos
*/
export async function ClientLoader() {
  return await getPokemons();
}

//este archivo no se ha editado respecto a la versión declarativa

const API_URL = "https://pokeapi.co/api/v2/pokemon";

export async function getPokemons(): Promise<PokemonBasic[]> {
  const response = await fetch(API_URL);
  if (!response.ok) {
    throw new Error("Error fetching users");
  }
  const data = await response.json();
  console.log("Data fetched from PokeAPI:", data.results);
  return data.results;
}

export default function PokemonsPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const pokemonsList = useLoaderData() as PokemonBasic[];

  return <PokemonList pokemonsList={pokemonsList} />;
}
