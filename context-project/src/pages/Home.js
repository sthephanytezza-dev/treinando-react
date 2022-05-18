import "./Home.css";

// import { useContext } from "react";
// import { CounterContext } from "../context/CounterContext";

import ChangeCounter from "../components/ChangeCounter";

// 4- refatorando com o hook
import { useCounterContext } from "../hooks/useCounterContext";

// 5- context complexo
import { useTitleColorContext } from "../hooks/useTitleColorContext";

const Home = () => {
  // const { counter } = useContext(CounterContext);
  const { counter } = useCounterContext();

  //5 - context mais complexo
  const { color } = useTitleColorContext();

  return (
    <>
      <h1 style={{ color: color }}>Home</h1>
      <p>Valor do contador: {counter}</p>
      {/*3- Alterando valor do contexto */}
      <ChangeCounter />
    </>
  );
};

export default Home;
