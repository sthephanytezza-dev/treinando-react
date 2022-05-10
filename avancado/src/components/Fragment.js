import React from 'react'

const Fragment = ({propFragment}) => {
  return (
    <>
        <h1>Primeiro título</h1>
        <h2>Segundo título</h2>
        <h3>{propFragment}</h3>
    </>
  )
}

export default Fragment