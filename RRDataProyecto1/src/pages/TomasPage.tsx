import { useNavigate } from "react-router-dom";

export default function Tomas() {
  const navigate = useNavigate();
  return (
    <>
      <div style={{ background: "LightCoral" }}>
        <p>
          Tomás es el autor y como podéis ver, esta es una ruta anidada dentro
          de Sobre :)
          <button onClick={() => navigate("/sobre")}>Volver a Sobre</button>
        </p>
      </div>
    </>
  );
}
