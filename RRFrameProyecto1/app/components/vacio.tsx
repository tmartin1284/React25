import { Outlet } from "react-router-dom";

export default function Vacio() {
  return (
    <>
      <div style={{ background: "Blue" }}>
        <h1> Pokemon list</h1>
        <Outlet />
        <h2>fasdf</h2>
      </div>
    </>
  );
}
