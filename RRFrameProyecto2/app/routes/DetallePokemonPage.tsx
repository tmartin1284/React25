import { Link, useLoaderData } from "react-router";
import type { Pokemon } from "../types/interfaces";
import PokemonCard from "../components/PokemonCard";
import type { Route } from "../../.react-router/types/app/routes/+types/DetallePokemonPage";
const API_URL = "https://pokeapi.co/api/v2/pokemon";
import "../App.css";

//en RRData era   .react-router/types/app/routes/datos/+types/CServ.ts";
//export async function pokemonDetalleLoader({ params }: LoaderFunctionArgs) {
//y estaba en ewl archivo pokemonDetalleLoader.tsx, pero ahora lo he movido a esta misma ruta y lo exporto desde aqui, para que quede todo mas ordenado y no tener tantos archivos sueltos
//lo mismo, si llamo a la función loader, se cargará desde el server; si la llamo clientLoader, se cargará desde el cliente, pero como el componente lo llama desde dentro, no hace falta que le pasamos nada, porque el componente ya sabe que tiene que llamar a esta función para obtener los datos, y esta función ya sabe que tiene que hacer la petición a la API para obtener los datos, y luego devolverlos al componente, que es lo que hace useLoaderData
export async function loader({ params }: Route.LoaderArgs) {
  // ojooo aqui params.id es porque hemos declarado en el routes pokemons/:id, que el id es un parametro dinamico, y ese id es el que nos va a llegar aqui por params.id, asi que podemos usarlo para hacer la peticion a la API y obtener los datos del pokemon que corresponda a ese id
  const pokemonId = params.id; //aquí podríamos usar el id que venga por params, pero como no tenemos una ruta dinámica, lo dejo fijo a pikachu para que funcione la demo

  if (!pokemonId) {
    throw new Response("Pokemon ID not provided", { status: 400 });
  }

  const response = await fetch(`${API_URL}/${pokemonId}`);
  if (!response.ok) {
    throw new Error("Error fetching pokemon by ID");
  }
  return response.json();
}

//este archivo no se ha editado respecto a la versión declarativa

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
//aqui ocurre igual que con loader. Si solo ponemos action, serán acciones que se ejecuten en el servidor,
//  si ponermos clientAction, se ejecutarán en el cliente
//  y conmo vamos a utilizar el localStorage, que solo está disponible en el cliente, pues lo llamamos clientAction, para que quede claro que esta acción se ejecuta en el cliente,
export async function clientAction({
  request,
  //params,
}: Route.ActionArgs): Promise<FavoriteResponse> {
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

export default function DetallePokemonPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const pokemon = useLoaderData() as Pokemon;
  return (
    <div>
      <PokemonCard pokemon={pokemon} />
      <Link to="/pokemons" style={{ display: "block", marginTop: "20px" }}>
        Volver a la lista de Pokemons{" "}
      </Link>
      <p></p>
    </div>
  );
}
