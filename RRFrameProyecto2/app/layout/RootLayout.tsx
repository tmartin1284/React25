import Navegacion2 from "../components/Navegacion2";
import Navegacion from "../components/Navegacion";
import Comp2 from "../components/Comp2";
import { Outlet } from "react-router";

export default function RootLayout() {
  return (
    <>
      {/* <div className="min-h-screen flex items-center justify-center"> */}
      <Comp2 />
      <Navegacion2 />
      <Outlet />
      <Navegacion />
      {/* </div> */}
    </>
  );
}
