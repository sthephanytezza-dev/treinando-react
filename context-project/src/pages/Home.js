import "./Home.css";

import { createContext, useContext } from "react";
import { CounterContext } from "../context/CounterContext";

const Home = () => {
  const { counter } = useContext(CounterContext);

  return (
    <>
      <h1>Home</h1>
      <p>Valor do contador: {counter}</p>
    </>
  );
};

export default Home;
