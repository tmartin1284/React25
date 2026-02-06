import { useState } from "react";
import "../App.css";

export default function Comp() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="logo-container" style={{ background: "Lavender" }}>
        <h1>Vite + React</h1>
      </div>
      <div className="card" style={{ background: "lavender" }}>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
        <p className="read-the-docs">
          Click on the Vite and React logos to learn more
        </p>
      </div>
    </>
  );
}
