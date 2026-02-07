//import Navegacion2 from "../components/Navegacion2";
import Navegacion from "../components/Navegacion";
import Comp2 from "../components/Comp2";
import { Outlet } from "react-router";

export const RootLayout = () => (
  <>
    <Comp2 />
    {/* <Navegacion2 /> */}
    <Outlet />
    <Navegacion />
  </>
);
