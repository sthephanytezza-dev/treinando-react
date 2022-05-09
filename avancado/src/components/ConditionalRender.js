import { useState } from "react";

const ConditionalRender = () => {
  const [x] = useState(true);
  const [name] = useState("Joao");

  return (
    <div>
      <h1>Isso será exibido?</h1>
      {x && <p>Se x for true, sim</p>}
      {name === "Joao" ? (
        <div>
          <p>O nome é Joao</p>
        </div>
      ) : (
        <div>
          <p>Nome não encontrado</p>
        </div>
      )}
    </div>
  );
};

export default ConditionalRender;
