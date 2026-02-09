import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("layouts/rootLayout.tsx", [
    route("inicio", "./pages/InicioPagePage.tsx"),
    route("sobre", "./pages/SobrePage.tsx", [
      route("tomas", "./pages/TomasPage.tsx"),
      route("txupito", "./pages/TxupitoPage.tsx"),
    ]),
    ...prefix("pokemons", [
      index("./pages/PokemonsPage.tsx"),
      layout("components/vacio.tsx", [
        route(":pokemonId", "./pages/DetallePokemonPage.tsx"),
      ]),
    ]),
    route("pokeerror/:error", "./pages/PokeErrorPage.tsx"),
    route("*", "./pages/ErrorPage.tsx"),
  ]),
] satisfies RouteConfig;
