import { useCounterContext } from "../hooks/useCounterContext";

const Products = () => {
  const { counter } = useCounterContext();

  return (
    <div>
      <h1>Produtcs</h1>
      <p>Valor do contador: {counter}</p>
    </div>
  );
};

export default Products;
