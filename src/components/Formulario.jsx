import { useState } from 'react';
import PropTypes from 'prop-types';
import { nanoid } from 'nanoid';
import { Error } from './Error';

export const Formulario = ({ setGuardarGasto, setGuardarCrearGasto }) => {
  const [nombre, setNombre] = useState('');
  const [cantidad, setCantidad] = useState();

  const [error, setError] = useState(false);

  const agregarGasto = (e) => {
    e.preventDefault();
    //validar
    if (cantidad <= 1 || isNaN(cantidad) || nombre.trim() === '') {
      setError(true);
      return;
    }
    setError(false);
    //construir gasto
    const gasto = {
      nombre,
      cantidad,
      id: nanoid(),
    };
    //Mandar los gastos al state principal(componente App)
    setGuardarGasto(gasto);
    setGuardarCrearGasto(true);
    //Resetear form
    setNombre('');
    setCantidad();
  };

  return (
    <form onSubmit={agregarGasto}>
      <h2>Agrega tus gastos aquí</h2>

      {error ? (
        <Error mensaje='Ambos campos son obligatorios o los campos son incorrectos' />
      ) : null}

      <div className='campo'>
        <label htmlFor=''>Nombre gasto</label>
        <input
          type='text'
          className='u-full-width'
          placeholder='Ej. Transporte'
          onChange={(e) => setNombre(e.target.value)}
        />
      </div>

      <div className='campo'>
        <label htmlFor=''>Cantidad gasto</label>
        <input
          type='number'
          className='u-full-width'
          placeholder='Ej. 300'
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
        />
      </div>

      <input
        type='submit'
        value='Agregar gasto'
        className='u-full-width button-primary'
      />
    </form>
  );
};

Formulario.propTypes = {
  setGuardarGasto: PropTypes.func.isRequired,
  setGuardarCrearGasto: PropTypes.func.isRequired,
};
