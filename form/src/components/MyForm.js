import "./MyForm.css";

import { useState } from "react";

const MyForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    console.log(name, email);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nome:</label>
          <input
            type="text"
            name="name"
            placeholder="Digite seu nome"
            onChange={handleName}
          />
        </div>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default MyForm;
