import { useState } from "react";

const HookUseState = () => {
  // 1- useState
  let userName = "Joao";

  const [name, setName] = useState("Sthephany");

  const changeNames = () => {
    userName = "Joao Souza";
    setName("Sthephany Karoline");
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável: {userName} </p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
    </div>
  );
};

export default HookUseState;
