import React, { useState } from 'react';
import axios from 'axios';
import './Mantenimiento.css';

const Mantenimiento = () => {
  const [formData, setFormData] = useState({
    // Define las propiedades generales que corresponden a las columnas de cualquier tabla
    // Por ejemplo:
    id: '',
    name: '',
    // ... otras propiedades ...
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = async () => {
    try {
      // Realiza una solicitud POST al servidor para guardar los datos
      await axios.post('http://localhost:3000/mantenimiento/your_table_name', formData);

      // Realiza acciones adicionales después de guardar, como limpiar el formulario, mostrar un mensaje de éxito, etc.
      // Puedes añadir lógica adicional aquí según tus necesidades.
    } catch (error) {
      console.error('Error al guardar el registro:', error.message);
      // Puedes mostrar un mensaje de error, etc.
    }
  };

  return (
    <div>
      <h2>Mantenimiento</h2>
      <form>
        {/* Renderiza los campos del formulario según las propiedades generales */}
        <label>
          ID:
          <input type="text" name="id" value={formData.id} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <br />
        {/* Añade más campos según sea necesario */}
        <br />
        <button type="button" onClick={handleSave}>
          Save
        </button>
      </form>
    </div>
  );
};

export default Mantenimiento;
