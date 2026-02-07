import { useLoaderData, useActionData, Form } from "react-router-dom";
import { useState, useEffect } from "react";
import type { Pokemon } from "../types/interfaces";
import PokemonCard from "../components/PokemonCard";

interface ActionData {
  success: boolean;
  message: string;
  action: string;
}

export default function DetallePokemon() {
  const pokemon = useLoaderData() as Pokemon;
  const actionData = useActionData() as ActionData | undefined;
  const [isFavorite, setIsFavorite] = useState(false);

  // Verificar si el pokémon está en favoritos al cargar
  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
    setIsFavorite(favorites.includes(pokemon?.name));
  }, [pokemon?.name]);

  // Actualizar estado después de una acción exitosa
  useEffect(() => {
    if (actionData?.success) {
      const favorites = JSON.parse(localStorage.getItem("favorites") || "[]");
      setIsFavorite(favorites.includes(pokemon?.name));
    }
  }, [actionData, pokemon?.name]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <PokemonCard pokemon={pokemon} />

      <div style={{ marginTop: "20px", padding: "20px", background: "#f0f0f0" }}>
        {isFavorite ? (
          <Form method="post">
            <input type="hidden" name="action" value="remove" />
            <input type="hidden" name="name" value={pokemon.name} />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "#ff6b6b",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              ❤️ Remover de Favoritos
            </button>
          </Form>
        ) : (
          <Form method="post">
            <input type="hidden" name="action" value="favorite" />
            <input type="hidden" name="name" value={pokemon.name} />
            <button
              type="submit"
              style={{
                padding: "10px 20px",
                background: "#4CAF50",
                color: "white",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                fontSize: "16px",
              }}
            >
              🤍 Agregar a Favoritos
            </button>
          </Form>
        )}

        {actionData && (
          <p
            style={{
              marginTop: "10px",
              padding: "10px",
              background: actionData.success ? "#d4edda" : "#f8d7da",
              color: actionData.success ? "#155724" : "#721c24",
              borderRadius: "5px",
            }}
          >
            {actionData.message}
          </p>
        )}
      </div>
    </div>
  );
}
