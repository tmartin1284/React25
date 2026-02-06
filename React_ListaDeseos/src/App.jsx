import { useState } from "react";
import AddDeseo from "./AddDeseo/AddDeseo.jsx";
import DeseoList from "./Listadeseos/DeseoList.jsx";

import "./App.css";

const estadoInicial = [
  { titulo: "ir a a Luna", hecho: false, fecha: Date.now() },
  { titulo: "ir al quiropráctico", hecho: true, fecha: Date.now() },
  { titulo: "unas nike nuevas", hecho: false, fecha: Date.now() },
];

/*titulo: "ir a a Luna";
hecho: false;
fecha: "2024-12-31";*/
export default function App() {
  const [Deseos, setDeseos] = useState(estadoInicial);

  function onHechoChange(hecho, index) {
    const antDeseos = [...Deseos];
    antDeseos[index].hecho = hecho;
    setDeseos(antDeseos);
  }
  /* Podemos configurar esto de dos formas: 1) que el componente devuelva el deseo tal cual
  o 2) que devuelva la descripción del deseo, y aquí completamos el resto de contenido del deseo.
  
  de cualquiera de las dos formas, hay que tener en cuenta que añada el deso a partir de la lista de deseos anterior , 
  que está guardado en el estado, para no perder los deseos ya añadidos.
  u */

  const agregardeseo = (a) => {
    setDeseos((w) => [...w, { titulo: a, hecho: false, fecha: Date.now() }]);
    /* setDeseos(() => [
          ...Deseos,
          { titulo: a, hecho: false, fecha: Date.now() },
        ]);*/

    /**
     * Mucho ojo aqui. si os fijais, cuando actualizamos el estado, no accedemos al estado anterior directamente (Deseos),
     * sino que usamos una función que recibe el estado anterior (w) y devuelve el nuevo estado.
     * Esto es importante porque React puede agrupar varias actualizaciones de estado para optimizar el rendimiento,
     * y si accedemos directamente a Deseos, podríamos estar trabajando con un estado desactualizado.
     * Al usar la función, siempre obtenemos el estado más reciente.
     */
  };

  return (
    <>
      <div>
        <h1>Mi lista de deseos 2025/26</h1>
        <AddDeseo onNewDeseo={agregardeseo} />
        <DeseoList ListaDeseos={Deseos} onHechoChange={onHechoChange} />
        <button
          id="Carlos"
          className="Deseo-clear"
          onClick={() => setDeseos(Deseos.filter((b) => !b.hecho))}
        >
          Limpiar deseos
        </button>
      </div>
    </>
  );
}
