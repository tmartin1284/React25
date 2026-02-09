import { Link } from "react-router-dom";
import { type Route } from "../../.react-router/types/app/routes/+types/InicioPage.ts";

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
