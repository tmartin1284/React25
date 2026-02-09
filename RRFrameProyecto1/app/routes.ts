import {
  type RouteConfig,
  index,
  route,
  layout,
  prefix,
} from "@react-router/dev/routes";

export default [
  layout("layouts/rootLayout.tsx", [
    route("inicio", "./routes/InicioPage.tsx"),
    route("sobre", "./routes/SobrePage.tsx", [
      route("tomas", "./routes/TomasPage.tsx"),
      route("txupito", "./routes/TxupitoPage.tsx"),
    ]),
    ...prefix("pokemons", [
      index("./routes/PokemonsPage.tsx"),
      layout("components/vacio.tsx", [
        route(":pokemonId", "./routes/DetallePokemonPage.tsx"),
      ]),
    ]),
    route("pokeerror/:error", "./routes/PokeErrorPage.tsx"),
    route("*", "./routes/ErrorPage.tsx"),
  ]),
] satisfies RouteConfig;

/**
 *
 * para otro ejemplo de organización de rutas, podeis ver el proyecto React Router Fraework 24, que es el ejmplo del año pasao.
 * o si queréis ver sólo el archivo rutes, está en ../routes_ejemplo con mas cosas.ts
 */
