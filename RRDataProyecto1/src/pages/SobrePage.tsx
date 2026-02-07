import { Link, Outlet } from "react-router";

export default function Sobre() {
  return (
    <>
      <div style={{ background: "Bisque" }}>
        <h1>Sobre esta aplicación</h1>
        <p>
          Esta aplicación ha sido creada para el aprendizaje de React Router Dom
          v6
        </p>
        <p>
          y ya de paso, en este componente vamos a ver como se renderizan
          llamadas anidadas de paginas
        </p>
        <Outlet />
        <p>ñfalsidfjasñdkfasñjdlf</p>
        <Outlet />
        <Link to="/"> Clik aqui para ir al inicio de la aplicación </Link>
        El outlet que hay abajo, es el lugar donde se renderizan las rutas
        anidadas
      </div>
    </>
  );
}
