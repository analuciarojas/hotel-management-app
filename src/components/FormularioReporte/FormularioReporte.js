import React, { useState } from 'react';
import './FormularioReporte.css';

const FormularioReporte = () => {
  const [tipoReporte, setTipoReporte] = useState('Reporte1'); // Por defecto, seleccionar el Reporte1

  const handleChangeTipoReporte = (event) => {
    setTipoReporte(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Aquí puedes agregar la lógica para invocar la ejecución de la Vista y el Stored Procedure
    // según el tipo de reporte seleccionado (tipoReporte)

    // Ejemplo:
    if (tipoReporte === 'Reporte1') {
      // Lógica para el Reporte 1
      console.log('Generando Reporte 1...');
    } else if (tipoReporte === 'Reporte2') {
      // Lógica para el Reporte 2
      console.log('Generando Reporte 2...');
    }
  };

  return (
    <div>
      <h2>Formulario Reporte</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Selecciona el tipo de reporte:
          <select value={tipoReporte} onChange={handleChangeTipoReporte}>
            <option value="Reporte1">Reporte 1</option>
            <option value="Reporte2">Reporte 2</option>
          </select>
        </label>
        <button type="submit">Generar Reporte</button>
      </form>
    </div>
  );
};

export default FormularioReporte;
