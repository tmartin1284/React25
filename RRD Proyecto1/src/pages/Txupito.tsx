import txupitoImg from "../assets/txupito.jpg";

export default function Txupito() {
  return (
    <>
      <div style={{ background: "PowderBlue " }}>
        <img src={txupitoImg} alt="Txupito" width="500" height="300" />
        <p>este es Txupito, esta es otra ruta anidada dentro de Sobre</p>
      </div>
    </>
  );
}
