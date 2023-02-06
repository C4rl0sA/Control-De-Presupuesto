import React, { useState, useEffect } from 'react';
import {
  Formulario,
  Listado,
  Pregunta,
  ControlPresupuesto,
} from './components';

export const App = () => {
  const [presupuesto, setGuardarPresupuesto] = useState();
  const [restante, setGuardarRestante] = useState();
  const [mostrarPregunta, setMostrarPregunta] = useState(true);
  const [gastos, setGuardarGastos] = useState([]);
  const [gasto, setGuardarGasto] = useState({});
  const [crearGasto, setGuardarCrearGasto] = useState(false);

  //Actualiza el restante
  useEffect(() => {
    //Agrega el nuevo presupuesto
    if (crearGasto) {
      setGuardarGastos([...gastos, gasto]);
    }
    //Resta del presupuesto actual
    const presupuestoRestante = restante - gasto.cantidad;
    setGuardarRestante(presupuestoRestante);
    //
    setGuardarCrearGasto(false);
  }, [gasto, crearGasto, restante, gastos]);

  return (
    <>
      <div className='container'>
        <header>
          <h1>Gasto semanal</h1>
          <div className='contenido-principal contenido'>
            {mostrarPregunta ? (
              <Pregunta
                setGuardarPresupuesto={setGuardarPresupuesto}
                setGuardarRestante={setGuardarRestante}
                setMostrarPregunta={setMostrarPregunta}
              />
            ) : (
              <div className='row'>
                <div className='one-half column'>
                  {' '}
                  <Formulario
                    setGuardarGasto={setGuardarGasto}
                    setGuardarCrearGasto={setGuardarCrearGasto}
                  />{' '}
                </div>
                <div className='one-half column'>
                  <Listado gastos={gastos} />
                  <ControlPresupuesto
                    presupuesto={presupuesto}
                    restante={restante}
                  />
                </div>
              </div>
            )}
          </div>
        </header>
      </div>
    </>
  );
};
