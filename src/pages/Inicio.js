import React from 'react';
import { Link } from 'react-router-dom';

const Inicio = () => {
  return (
    <div className="inicio-container">
      <header>
        <h1>Bienvenido al Sistema de Gestión de Hoteles</h1>
      </header>
      <section>
        <p>
          Bienvenido al Sistema de Gestión de Hoteles. Este sistema proporciona herramientas
          avanzadas para administrar y controlar la información relacionada con hoteles.
          Desde la gestión de reservas hasta la generación de informes, ¡hacemos que todo sea fácil!
        </p>
        <p>
          Explora las distintas secciones de la aplicación utilizando la barra de navegación.
          Puedes acceder al formulario de reporte, ver los resultados de los informes,
          realizar operaciones de mantenimiento en la base de datos y más.
        </p>
      </section>
      <section>
        <img src="ruta/de/imagen.jpg" alt="Descripción de la imagen" />
      </section>
    </div>
  );
};

export default Inicio;
