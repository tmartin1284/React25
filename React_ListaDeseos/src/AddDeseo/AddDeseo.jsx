import { useState } from "react";
import PropTypes from "prop-types";

export default function AddDeseo({ onNewDeseo }) {
  const [NuevoDeseo, setNuevoDeseo] = useState("");

  return (
    <fieldset id="fieldset" className="Deseo-Input">
      <input
        type="text"
        id="input"
        className="Deseo-input__field"
        placeholder="Escribe tu deseo"
        onChange={(e) => {
          setNuevoDeseo(e.target.value);
        }}
      />
      <button
        id="button"
        className="Deseo-input__button"
        onClick={() => {
          //miramos si hay un deseo
          if (!NuevoDeseo.trim() == "") {
            //podemos elegir si queremos devolver el deseo como string y que luego se construya el objeto, o devolverlo como  como objeto
            // onNewDeseo({ titulo: NuevoDeseo, hecho: false, fecha: Date().now });
            //en este caso devolvemos solo el string y que luego se construya el objeto en el padre
            onNewDeseo(NuevoDeseo);
            document.getElementsByTagName("input")[0].value = "";
            setNuevoDeseo("");
          }
        }}
      >
        Agregar Deseo
      </button>
    </fieldset>
  );
}

AddDeseo.propTypes = {
  onNewDeseo: PropTypes.func.isRequired,
};
