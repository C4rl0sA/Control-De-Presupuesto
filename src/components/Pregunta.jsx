import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Error } from './Error';

export const Pregunta = (props) => {
  const { setGuardarPresupuesto, setGuardarRestante, setMostrarPregunta } =
    props;

  const [cantidad, setCantidad] = useState(0);
  const [error, setError] = useState(false);

  const DefinirPresupuesto = (e) => {
    setCantidad(parseInt(e.target.value, 10));
  };
  const agregarPresupuesto = (e) => {
    e.preventDefault();
    if (cantidad <= 1 || isNaN(cantidad)) {
      setError(true);
      return;
    }
    setGuardarPresupuesto(cantidad);
    setGuardarRestante(cantidad);
    setMostrarPregunta(false);
  };

  return (
    <>
      <h2>Coloca tu presupuesto</h2>
      {error ? <Error mensaje='Presupuesto incorrecto' /> : null}
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

Pregunta.propTypes = {
  setGuardarPresupuesto: PropTypes.func.isRequired,
  setGuardarRestante: PropTypes.func.isRequired,
  setMostrarPregunta: PropTypes.func.isRequired,
};
