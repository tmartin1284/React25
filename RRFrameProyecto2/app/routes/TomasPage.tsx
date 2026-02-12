import type { Route } from "../+types/root";
import { Link } from "react-router";
import "../App.css";

export default function TomasPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <>
      <div style={{ background: "LightCoral" }}>
        <p>
          Tomás es el autor y como podéis ver, esta es una ruta anidada dentro
          de Sobre :) link a <Link to="/sobre">Sobre</Link>
        </p>
      </div>
    </>
  );
}
