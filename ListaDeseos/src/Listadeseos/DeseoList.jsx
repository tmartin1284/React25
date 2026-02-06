//import { useState } from "react";
import PropTypes from "prop-types";
import DeseoItem from "./DeseoItem.jsx";
import "../App.css";

export default function DeseoList({ ListaDeseos, onHechoChange }) {
  return (
    <>
      <h1>
        Lista deseos{" "}
        {ListaDeseos.reduce((acc, deseo) => acc + (!deseo.hecho ? 1 : 0), 0) ==
        0
          ? "realizados"
          : ""}
      </h1>
      <ul className="Deseo-lista">
        {ListaDeseos.map(
          (
            deseo,
            index //cuidado que yo aqui tenía una llave, y petaba
            //si lo ponemos con llave, hay que poner return
          ) => (
            <DeseoItem
              onHechoChange={(hecho) => onHechoChange(hecho, index)}
              Deseo={deseo} //mucho cuidado, que yo usaba la minuscula y no funcionaba
              key={index} //la key no se pasa al componente hijo, es para react internamente
            />
          )
        )}
      </ul>
      <h3>fin</h3>
    </>
  );
}

DeseoList.propTypes = {
  ListaDeseos: PropTypes.arrayOf(
    PropTypes.shape({
      titulo: PropTypes.string,
      hecho: PropTypes.bool,
      fecha: PropTypes.string,
    })
  ).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};

DeseoList.defaultProps = {
  ListaDeseos: [],
};
