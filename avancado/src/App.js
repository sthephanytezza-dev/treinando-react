import './App.css';
import { useState } from 'react';

import ShowUserName from './components/ShowUserName';
import CarsDetails from './components/CarsDetails';

function App() {
  const [userName] = useState("Maria");

  return (
    <div className="App">
      <h1>Avançado em react</h1>
      <ShowUserName name={userName} />
      <CarsDetails brand="WV" km={100000} color="Vermelho"/>
    </div>
  );
}

export default App;
