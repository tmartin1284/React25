import { createBrowserRouter } from "react-router-dom";

// Importar componentes pagina

import Pokemons from "../pages/PokemonsPage";
import Inicio from "../pages/InicioPagePage";
import Sobre from "../pages/SobrePage";
import DetallePokemon from "../pages/DetallePokemonPage";
import Error from "../pages/ErrorPage";
import Tomas from "../pages/TomasPage";
import Txupito from "../pages/TxupitoPage";
import PokeError from "../pages/PokeErrorPage";
import Vacio from "../components/vacio";

// Layout raíz
import { RootLayout } from "../layouts/rootLayout";

// Loaders
import { pokemonsLoader } from "./loaders/pokemonsLoader";
import { pokemonDetalleLoader } from "./loaders/pokemonDetalleLoader";

// Actions
import { pokemonAction } from "./actions/pokemonAction";

//ahora el componente router se encarga de definir las rutas, los loaders y el layout raíz. El layout raíz es el que se renderiza siempre, y dentro de él se renderizan los componentes correspondientes a cada ruta a través del Outlet. Además, se define un errorElement para manejar las rutas no encontradas o errores en la carga de datos.
export const router = createBrowserRouter([
  {
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
            loader: pokemonsLoader,
          },
          {
            path: ":pokemonId",
            element: <DetallePokemon />,
            loader: pokemonDetalleLoader,
            action: pokemonAction,
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
