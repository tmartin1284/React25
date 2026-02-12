import type { Pokemon } from "../types/interfaces";
import { useActionData, Form } from "react-router";
import { useState, useEffect } from "react";

import "../App.css";

interface ActionData {
  success: boolean;
  message: string;
  action: string;
}
export default function PokemonCard({ pokemon }: { pokemon: Pokemon }) {
  const actionData = useActionData() as ActionData | undefined;
  const [isFavorite, setIsFavorite] = useState(false);
  const [tempMessage, setTempMessage] = useState<string | null>(null);

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

  useEffect(() => {
    if (actionData?.message) {
      setTempMessage(actionData.message);

      const timer = setTimeout(() => {
        setTempMessage(null);
      }, 2000); // 2 segundos

      return () => clearTimeout(timer);
    }
  }, [actionData]);

  if (!pokemon) {
    return <div>Cargando...</div>;
  }

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
    <>
      <div style={{ background: "PaleGreen" }}>
        {isFavorite && (
          <span style={{ fontSize: "24px" }}>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</span>
        )}
        <img
          src={pokemon?.sprites?.front_default ?? undefined}
          height="200"
          width="200"
          alt={pokemon?.name}
        />
        {isFavorite && (
          <span style={{ fontSize: "24px" }}>❤️❤️❤️❤️❤️❤️❤️❤️❤️❤️</span>
        )}
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

      <div
        style={{ marginTop: "20px", padding: "20px", background: "#f0f0f0" }}
      >
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

        {tempMessage && actionData && (
          <p
            style={{
              marginTop: "10px",
              padding: "10px",
              background: actionData.success ? "#d4edda" : "#f8d7da",
              color: actionData.success ? "#155724" : "#721c24",
              borderRadius: "5px",
            }}
          >
            {tempMessage}
          </p>
        )}
      </div>
    </>
  );
}
