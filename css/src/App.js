import "./App.css";

import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      <h1>React com CSS</h1>
      <MyComponent />
      <p>Esse parágrafo é do app.js</p>
      <p className="my_comp_para">Esse também é do componente</p>

      <p style={{ color: "blue", padding: "25px", borderTop: "2px solid red" }}>
        Esse elemento foi estilizado de forma inline
      </p>
    </div>
  );
}

export default App;
