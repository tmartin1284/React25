import {
  type RouteConfig,
  index,
  route,
  layout,
} from "@react-router/dev/routes";

export default [
  layout("layouts/rootLayout.tsx", [
    index("./pages/InicioPagePage.tsx"),
    route("inicio", "./pages/InicioPagePage.tsx"),
    route("sobre", "./pages/SobrePage.tsx", [
      route("tomas", "./pages/TomasPage.tsx"),
      route("txupito", "./pages/TxupitoPage.tsx"),
    ]),
    layout(
      "components/vacio.tsx",
      [
        index("./pages/PokemonsPage.tsx", {
          loader: "./router_c/loaders/pokemonsLoader.ts",
        }),
        route(":pokemonId", "./pages/DetallePokemonPage.tsx", {
          loader: "./router_c/loaders/pokemonDetalleLoader.ts",
          action: "./router_c/actions/pokemonAction.ts",
        }),
      ],
      { path: "pokemons" },
    ),
    route("pokeerror/:error", "./pages/PokeErrorPage.tsx"),
    route("*", "./pages/ErrorPage.tsx"),
  ]),
] satisfies RouteConfig;
