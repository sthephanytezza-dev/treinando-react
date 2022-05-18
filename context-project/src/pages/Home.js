import "./Home.css";

import { useContext } from "react";
import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*3- Alterando valor do contexto */}
      <ChangeCounter />
    </>
  );
};

export default Home;
