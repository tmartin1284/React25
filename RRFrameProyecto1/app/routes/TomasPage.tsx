import { useNavigate } from "react-router-dom";
import { type Route } from "../../.react-router/types/app/routes/+types/TomasPage.ts";

export default function TomasPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ background: "LightCoral" }}>
        <p>
          Tomás es el autor y como podéis ver, esta es una ruta anidada dentro
          de Sobre :)
          <button onClick={() => navigate("/sobre")}>Volver a Sobre</button>
        </p>
      </div>
    </>
  );
}
