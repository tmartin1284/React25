import { RouterProvider } from "react-router-dom";
import { router } from "./router/router.tsx";
import "./App.css";

export default function App() {
  return <RouterProvider router={router} />;
}
