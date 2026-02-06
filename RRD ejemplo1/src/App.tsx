import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import Comp from "./components/Comp.tsx";
import Comp2 from "./components/Comp2.tsx";
import "./App.css";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <nav style={{ background: "PaleGreen" }}>
          <Link to="/comp1">Comp1</Link> | <Link to="/comp2">Comp2</Link>
        </nav>
        <Routes>
          <Route path="/comp1" element={<Comp />} />
          <Route
            path="/comp2"
            element={
              <>
                <Comp2 />
                <Comp />
                <Comp2 />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}
