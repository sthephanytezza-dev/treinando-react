import { useState } from "react";

const ListRender = () => {
  const [list] = useState(["Sthephany", "Karol", "Matheus"]);

  const [users, setUsers] = useState([
    { id: 1, name: "sthephany", age: 21 },
    { id: 2, name: "joao", age: 24 },
    { id: 3, name: "flavio", age: 45 },
  ]);

  const deleteRandom = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    setUsers((prevUsers) => {
      return prevUsers.filter((user) => randomNumber !== user.id);
    });
  };

  return (
    <>
      <div>
        <ul>
          {list.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <ul>
          {users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
        <button onClick={deleteRandom}>Delete random user</button>
      </div>
    </>
  );
};

export default ListRender;
