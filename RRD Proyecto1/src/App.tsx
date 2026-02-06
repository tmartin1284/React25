import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import Pokemons from "./pages/Pokemons";
import Inicio from "./pages/Inicio";
import Sobre from "./pages/Sobre";
import DetallePokemon from "./pages/DetallePokemon";
import Error from "./pages/Error";
import Tomas from "./pages/Tomas";
import Comp2 from "./components/Comp2";
import Txupito from "./pages/Txupito";
import Navegacion2 from "./components/Navegacion2";
import "./App.css";
import PokeError from "./pages/PokeError";
import Vacio from "./components/vacio";

export default function App() {
  return (
    <>
      <Comp2 />
      <BrowserRouter>
        <Navegacion2 />
        <Routes>
          <Route path="*" element={<Error />}></Route>
          <Route index element={<Inicio />} />
          <Route path="/inicio" element={<Inicio />} />
          <Route path="/sobre" element={<Sobre />}>
            <Route path="Tomas" element={<Tomas />} />
            <Route path="Txupito" element={<Txupito />} />
          </Route>

          <Route index element={<Pokemons />} />
          <Route element={<Vacio />}>
            <Route path="/pokemons">
              <Route index element={<Pokemons />} />
              <Route path=":pokemonId?" element={<DetallePokemon />} />
            </Route>
          </Route>

          <Route path="/pokeerror/:error" element={<PokeError />} />
        </Routes>
        <Navegacion />
      </BrowserRouter>
    </>
  );
}
