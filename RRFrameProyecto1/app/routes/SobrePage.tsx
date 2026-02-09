import { Link, Outlet } from "react-router-dom";

export default function Sobre({
  loaderData,
  actionData,
  params,
  matches,
}: Route.ComponentProps) {
  return (
    <>
      <div style={{ background: "Bisque" }}>
        <h1>Sobre esta aplicación</h1>
        <p>
          Esta aplicación ha sido creada para el aprendizaje de React Router Dom
          v6
        </p>
        <p>
          Antes de empezar. errores comunes. aseguraos que todos los componentes
          importan "react-router-dom" no react router a secas, y mucho menos
          unos uno y otros otro.
          <p>
            {" "}
            usando data, descargamos a los componentes de su carga, y eso nos lo
            llevamos a los loaders. Estos loaders los indicaremos en el router,
            vamos, la chicha está en la definición del router
          </p>
        </p>
        <p>
          y ya de paso, en este componente vamos a ver como se renderizan
          llamadas anidadas de paginas
        </p>
        <Outlet />
        <p>
          como metemos dos Outlet, pos ala, las páginas hijas se meten en dos
          sitios
        </p>
        <Outlet />
        <Link to="/"> Clik aqui para ir al inicio de la aplicación </Link>
        El outlet que hay abajo, es el lugar donde se renderizan las rutas
        anidadas
      </div>
    </>
  );
}
