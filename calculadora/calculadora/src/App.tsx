import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./Header";

type User = {
  id: number;
  name: string;
};

interface Userb {
  id: number;
  name: string;
}

const user1: User = {
  id: 1,
  name: "Alice",
};
const user2: Userb = {
  id: 1,
  name: "Pepe",
};

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <Header
          title="Mi Calculadora"
          idea={65}
          items={[{ id: 9, name: "aa" }]}
        />
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>
        Vite + React {user1.name} + {user2.name}
      </h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
