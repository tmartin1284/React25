import { useLoaderData } from "react-router-dom";
import type { Pokemon } from "../types/interfaces";
import PokemonCard from "../components/PokemonCard";
import { type Route } from "./+types/DetallePokemonPage";

const API_URL = "https://pokeapi.co/api/v2/pokemon";

//en RRData era
//export async function pokemonDetalleLoader({ params }: LoaderFunctionArgs) {
//y estaba en ewl archivo pokemonDetalleLoader.tsx, pero ahora lo he movido a esta misma ruta y lo exporto desde aqui, para que quede todo mas ordenado y no tener tantos archivos sueltos

export async function clientLoader({ params }: LoaderFunctionArgs) {
  const pokemonId = params.pokemonId;

  if (!pokemonId) {
    throw new Response("Pokemon ID not provided", { status: 400 });
  }

  return await getPokemonByID(pokemonId);
}

//este archivo no se ha editado respecto a la versión declarativa

export async function getPokemonByID(
  idPokemon: string,
): Promise<Pokemon | null> {
  const response = await fetch(`${API_URL}/${idPokemon}`);
  if (!response.ok) {
    throw new Error("Error fetching pokemon by ID");
  }
  return response.json();
}

/*ESta función antes se llamaba
export async function pokemonAction({
  request,
  //params,
}: ActionFunctionArgs): Promise<FavoriteResponse> {

estaba en su propio archivo pokemonAction.tsx, pero ahora lo he movido a esta misma ruta y lo exporto desde aqui, para que quede todo mas ordenado y no tener tantos archivos sueltos

Haremos uso de ella desde los propios componentes
*/

interface FavoriteResponse {
  success: boolean;
  message: string;
  action: string;
  pokemonName?: string;
}

export async function clientAction({
  request,
  //params,
}: ActionFunctionArgs): Promise<FavoriteResponse> {
  //const pokemonId = params.pokemonId;

  if (request.method === "POST") {
    const formData = await request.formData();
    const action = formData.get("action");

    if (action === "favorite") {
      const pokemonName = formData.get("name") as string;

      // Obtener favoritos del localStorage
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");

      // Verificar si ya está en favoritos
      if (favorites.includes(pokemonName)) {
        return {
          success: false,
          message: `${pokemonName} ya está en favoritos`,
          action: "favorite",
          pokemonName,
        };
      }

      // Agregar a favoritos
      favorites.push(pokemonName);
      localStorage.setItem("favorites", JSON.stringify(favorites));

      console.log("Pokémon agregado a favoritos:", pokemonName);

      return {
        success: true,
        message: `${pokemonName} agregado a favoritos`,
        action: "favorite",
        pokemonName,
      };
    }

    if (action === "remove") {
      const pokemonName = formData.get("name") as string;

      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      const updatedFavorites = favorites.filter(
        (fav: string) => fav !== pokemonName,
      );
      localStorage.setItem("favorites", JSON.stringify(updatedFavorites));

      console.log("Pokémon removido de favoritos:", pokemonName);

      return {
        success: true,
        message: `${pokemonName} removido de favoritos`,
        action: "remove",
        pokemonName,
      };
    }
  }

  return {
    success: false,
    message: "Acción no soportada",
    action: "unknown",
  };
}

//aqui empieza el componente

export default function DetallePokemon({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const pokemon = useLoaderData() as Pokemon;
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
    </div>
  );
}
