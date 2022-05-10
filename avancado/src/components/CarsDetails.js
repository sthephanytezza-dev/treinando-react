import React from 'react'

const CarsDetails = ({brand, km, color, novo}) => {
  return (
    <div>
        <h2>Detalhes do carro</h2>
        <ul>
            <li>Marca: {brand}</li>
            <li>KM: {km}</li>
            <li>Cor: {color}</li>
        </ul>
        {novo && <p>Esse carro é novo</p>}
    </div>
  )
}

export default CarsDetails