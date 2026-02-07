import { Link } from "react-router-dom";

export default function Navegacion() {
  return (
    <>
      <div style={{ background: "HoneyDew" }}>
        {/* <p>Ejemplo de componente con React Rourter Declarativo. </p> */}
        <nav style={{ display: "flex", gap: "1rem" }}>
          <Link to="/">Inicio</Link> | <Link to="/sobre">Sobre</Link> |
          <Link to="/sobre/tomas">Tomas</Link> |
          <Link to="/sobre/txupito">Txupito</Link> |
          <Link to="/pokemons">Pokemon</Link>
        </nav>
      </div>
    </>
  );
}
