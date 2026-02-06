import { createBrowserRouter } from "react-router-dom";

// Importar componentes
import Navegacion2 from "../components/Navegacion2";
import Pokemons from "../pages/Pokemons";
import Inicio from "../pages/Inicio";
import Sobre from "../pages/Sobre";
import DetallePokemon from "../pages/DetallePokemon";
import Error from "../pages/Error";
import Tomas from "../pages/Tomas";
import Txupito from "../pages/Txupito";
import Comp2 from "../components/Comp2";
import PokeError from "../pages/PokeError";
import Vacio from "../components/vacio";

// Layout raíz
const RootLayout = () => (
  <>
    <Comp2 />
    <Navegacion2 />
  </>
);

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Inicio />,
      },
      {
        path: "inicio",
        element: <Inicio />,
      },
      {
        path: "sobre",
        element: <Sobre />,
        children: [
          {
            path: "tomas",
            element: <Tomas />,
          },
          {
            path: "txupito",
            element: <Txupito />,
          },
        ],
      },
      {
        path: "pokemons",
        element: <Vacio />,
        children: [
          {
            index: true,
            element: <Pokemons />,
          },
          {
            path: ":pokemonId",
            element: <DetallePokemon />,
          },
        ],
      },
      {
        path: "pokeerror/:error",
        element: <PokeError />,
      },
      {
        path: "*",
        element: <Error />,
      },
    ],
  },
]);

export default router;
