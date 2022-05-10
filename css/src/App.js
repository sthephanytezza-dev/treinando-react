import { useState } from "react";

import "./App.css";

import MyComponent from "./components/MyComponent";

function App() {
  const n = 15;
  const [name] = useState("Sthephany");

  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Esse parágrafo é do app.js</p>
      <p className="my_comp_para">Esse também é do componente</p>

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Esse elemento foi estilizado de forma inline
      </p>

      <h2 style={n < 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2 style={n > 10 ? { color: "purple" } : { color: "pink" }}>
        CSS dinâmico
      </h2>
      <h2
        style={
          name === "Sthephany"
            ? { color: "green", backgroundColor: "#000" }
            : null
        }
      >
        CSS dinâmico
      </h2>
    </div>
  );
}

export default App;
