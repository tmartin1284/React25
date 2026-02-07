import { Link } from "react-router";

export default function Inicio() {
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
