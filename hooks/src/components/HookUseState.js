import { useState } from "react";

const HookUseState = () => {
  // 1- useState
  let userName = "Joao";

  const [name, setName] = useState("Sthephany");

  const changeNames = () => {
    userName = "Joao Souza";
    setName("Sthephany Karoline");
  };

  // 2- useState e input
  const [age, setAge] = useState(21);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(age);
  };

  return (
    <div>
      {/* useState */}
      <h2>useState</h2>
      <p>Variável: {userName} </p>
      <p>useState: {name}</p>
      <button onClick={changeNames}>Mudar nomes</button>
      <hr />
      {/*2- useState e input */}
      <p>Digite sua idade:</p>
      <form onSubmit={handleSubmit}>
        <input
          text="text"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input type="submit" value="enviar" />
      </form>
      <p>Você tem {age} anos.</p>
    </div>
  );
};

export default HookUseState;
