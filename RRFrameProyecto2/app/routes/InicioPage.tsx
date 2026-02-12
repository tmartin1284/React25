import { Link } from "react-router";
import type { Route } from "../+types/root";
import "../App.css";

export default function InicioPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <>
      <div style={{ background: "Gold" }}>
        <h1>Inicio</h1>
        <p>desde aqui podemos navegar a</p>
        <p>
          {" "}
          <Link to="/">Inicio</Link>{" "}
        </p>
        <p>
          | <Link to="/sobre">Sobre</Link>{" "}
        </p>
        <p>
          <Link to="/pokemons">pokemon</Link>{" "}
        </p>
      </div>
    </>
  );
}
