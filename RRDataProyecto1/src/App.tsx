import { RouterProvider } from "react-router-dom";
import Navegacion from "./components/Navegacion";
import Navegacion2 from "./components/Navegacion2";
import { router } from "./router/router.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <Navegacion2 />
      <RouterProvider router={router} />;
      <Navegacion />
    </>
  );
}
