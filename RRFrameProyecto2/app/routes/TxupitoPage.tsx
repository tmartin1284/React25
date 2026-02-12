import type { Route } from "../+types/root";
import "../App.css";

export default function TxupitoPage({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <>
      <div style={{ background: "PowderBlue " }}>
        <p>este es Txupito, esta es otra ruta anidada dentro de Sobre</p>
      </div>
    </>
  );
}
