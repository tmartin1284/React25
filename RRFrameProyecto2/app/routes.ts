import {
  type RouteConfig,
  index,
  layout,
  prefix,
  route,
} from "@react-router/dev/routes";

export default [
  layout("layout/RootLayout.tsx", [
    index("./routes/InicioPage.tsx"),
    //route("/inicio", "./routes/InicioPage.tsx"),
    route("/sobre", "./routes/SobrePage.tsx", [
      route("/sobre/tomas", "./routes/TomasPage.tsx"),
      route("/sobre/txupito", "./routes/TxupitoPage.tsx"),
    ]),
    //el prefijo con index da problemillas. abajo pongo lo mismo sin el index
    /*
    ...prefix("/pokemons", [
      index("./routes/PokemonsPage.tsx"),
      route("/pokemons/:id", "./routes/DetallePokemonPage.tsx"),
        ]),
      */
    route("/pokemons", "./routes/PokemonsPage.tsx"),
    route("/pokemons/:id", "./routes/DetallePokemonPage.tsx"),

    route("*", "./routes/ErrorPage.tsx"),
  ]),
] satisfies RouteConfig;
