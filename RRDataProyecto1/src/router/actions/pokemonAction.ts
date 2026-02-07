import type { ActionFunctionArgs } from "react-router-dom";

interface FavoriteResponse {
  success: boolean;
  message: string;
  action: string;
  pokemonName?: string;
}

export async function pokemonAction({
  request,
  params,
}: ActionFunctionArgs): Promise<FavoriteResponse> {
  const pokemonId = params.pokemonId;

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
        (fav: string) => fav !== pokemonName
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
