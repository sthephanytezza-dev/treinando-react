import "./MyForm.css";

import { useState } from "react";

const MyForm = ({ user }) => {
  const [name, setName] = useState(user ? user.name : "");
  const [email, setEmail] = useState(user ? user.email : "");
  const [bio, setBio] = useState(user ? user.bio : "");

  const handleName = (e) => {
    setName(e.target.value);
  };
  console.log(email);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Enviando formulario");
    console.log(name, email, bio);

    //limpar formulario
    setName("");
    setEmail("");
    setBio("");
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
            value={name}
            onChange={handleName}
          />
        </div>
        <label>
          <span>E-mail:</span>
          <input
            type="email"
            name="email"
            placeholder="Digite seu email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label>
          <span>Bio:</span>
          <textarea
            name="bio"
            placeholder="Descrição do usuario"
            value={bio}
            onChange={(e) => setBio(e.target.value)}
          ></textarea>
        </label>
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default MyForm;
