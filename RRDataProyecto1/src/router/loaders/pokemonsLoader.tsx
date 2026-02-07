import { getPokemons } from "../../services/accesoPokeapi";

export async function pokemonsLoader() {
  return await getPokemons();
}
