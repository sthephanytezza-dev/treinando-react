import "./App.css";
import { useState } from "react";

import ShowUserName from "./components/ShowUserName";
import CarsDetails from "./components/CarsDetails";
import Fragment from "./components/Fragment";
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";

function App() {
  const [userName] = useState("Maria");

  const cars = [
    { id: 1, brand: "Ferrari", color: "Red", novo: true, km: 0 },
    { id: 2, brand: "Ford", color: "Rosa", novo: false, km: 1000 },
    { id: 3, brand: "Toyota", color: "Verde", novo: true, km: 0 },
  ];

  function showMessage() {
    console.log("Evento do componente pai");
  }

  return (
    <div className="App">
      <h1>Avançado em react</h1>
      <ShowUserName name={userName} />
      <CarsDetails brand="WV" km={100000} color="Vermelho" novo={false} />
      <CarsDetails brand="Ford" km={0} color="Azul" novo={true} />
      {cars.map((car) => (
        <CarsDetails
          key={car.id}
          brand={car.brand}
          km={car.km}
          color={car.color}
          novo={car.novo}
        />
      ))}
      <Fragment propFragment="teste" />
      <Container myValue="teste">
        <p>Esse é o conteúdo</p>
      </Container>
      <Container myValue="valor">
        <p>Testando o container</p>
      </Container>

      <ExecuteFunction myFunction={showMessage}/>
    </div>
  );
}

export default App;
