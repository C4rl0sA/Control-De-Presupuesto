import React, { useState } from 'react';

export const Pregunta = () => {
  const [cantidad, guardarCantidad] = useState(0);

  const DefinirPresupuesto = (e) => {
    guardarCantidad(parseInt(e.target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      <form onSubmit={agregarPresupuesto}>
        <input
          type='number'
          className='u-full-width'
          placeholder='Coloca tu presupuesto'
          onChange={DefinirPresupuesto}
        />
        <input
          type='submit'
          className='button-primary u-full-width'
          value='Definir presupuesto'
        />
      </form>
    </>
  );
};
