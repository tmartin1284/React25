import { useState, useEffect } from "react";
import PropTypes from "prop-types";

import "../App.css";

export default function DeseoItem({ Deseo, onHechoChange }) {
  const [edad, setEdad] = useState(0);

  useEffect(() => {
    if (Deseo.hecho) setEdad(0);
    else {
      const interval = setInterval(
        () => setEdad((segundos) => segundos + 1),
        1000
      );
      return () => clearInterval(interval);
    }
  }, [Deseo.hecho]);

  return (
    <li
      key={Deseo.fecha}
      className={`Deseo-lista_item  
        ${Deseo.hecho ? "Deseo-lista__item--hecho" : ""}
        ${edad > 5 && edad < 20 ? "Deseo-lista__item--viejo" : ""}
        ${edad >= 20 ? "Deseo-lista__item--hazloya" : ""}
      `}
    >
      <input
        type="checkbox"
        defaultChecked={Deseo.hecho}
        onChange={() => {
          onHechoChange(!Deseo.hecho);
        }}
      />
      <label id={Deseo.fecha}>{Deseo.titulo}</label>
    </li>
  );
}

DeseoItem.propTypes = {
  Deseo: PropTypes.shape({
    titulo: PropTypes.string,
    hecho: PropTypes.bool,
    fecha: PropTypes.string,
  }).isRequired,
  onHechoChange: PropTypes.func.isRequired,
};
