import React, { useState } from 'react';
import Inicio from './pages/Inicio';
import FormularioReporte from './components/FormularioReporte/FormularioReporte';
import ResultadoReporte from './components/ResultadoReporte/ResultadoReporte';
import Mantenimiento from './components/Mantenimiento/Mantenimiento';
import NoEncontrado from './pages/NoEncontrado';

function App() {
  const [paginaSeleccionada, setPaginaSeleccionada] = useState('Inicio');

  const manejarClicNavegacion = (pagina) => {
    setPaginaSeleccionada(pagina);
  };

  return (
    <section>
      <nav>
        <button onClick={() => manejarClicNavegacion('Inicio')}>Inicio</button>
        <button onClick={() => manejarClicNavegacion('Formulario de Reporte')}>Formulario de Reporte</button>
        <button onClick={() => manejarClicNavegacion('Resultado de Reporte')}>Resultado de Reporte</button>
        <button onClick={() => manejarClicNavegacion('Mantenimiento')}>Mantenimiento</button>
      </nav>
      
      {paginaSeleccionada === 'Inicio' && <Inicio />}
      {paginaSeleccionada === 'Formulario de Reporte' && <FormularioReporte />}
      {paginaSeleccionada === 'Resultado de Reporte' && <ResultadoReporte />}
      {paginaSeleccionada === 'Mantenimiento' && <Mantenimiento />}

      {['Inicio', 'Formulario de Reporte', 'Resultado de Reporte', 'Mantenimiento'].indexOf(paginaSeleccionada) === -1 && <NoEncontrado />}
    </section>
  );
}

export default App;
