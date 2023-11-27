const express = require('express');
const sql = require('mssql');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuración para la conexión a la base de datos
const dbConfig = {
  user: 'tu_usuario',
  password: 'tu_contraseña',
  server: 'tu_servidor', // Puedes usar 'localhost' si es local
  database: 'tu_base_de_datos',
  options: {
    trustServerCertificate: true, // Cambia a 'false' si no estás usando un certificado SSL
  },
};

// Conectar a la base de datos
const connectToDatabase = async () => {
  try {
    await sql.connect(dbConfig);
  } catch (error) {
    console.error('Error al conectar a la base de datos:', error.message);
    throw error;
  }
};

// Desconectar de la base de datos
const disconnectFromDatabase = async () => {
  try {
    await sql.close();
  } catch (error) {
    console.error('Error al desconectar de la base de datos:', error.message);
    throw error;
  }
};

// Endpoint para operaciones de mantenimiento (CRUD) en cualquier tabla
app.route('/mantenimiento/:tableName')
  .post(async (req, res) => {
    const { tableName } = req.params;
    const data = req.body;

    try {
      await connectToDatabase();

      // Ejemplo: Realizar una operación de alta (INSERT) en la base de datos
      const columns = Object.keys(data).join(', ');
      const values = Object.values(data).map(value => `'${value}'`).join(', ');
      const query = `INSERT INTO ${tableName} (${columns}) VALUES (${values})`;

      await sql.query(query);

      res.status(201).json({ message: 'Registro creado exitosamente' });
    } catch (error) {
      console.error('Error al realizar la operación de mantenimiento:', error.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    } finally {
      await disconnectFromDatabase();
    }
  });

// Endpoint para generar el primer reporte
app.get('/reporte1', async (req, res) => {
    try {
      // Conectarse a la base de datos
      await sql.connect(dbConfig);
  
      // Invocar el Stored Procedure
      const result = await sql.query('EXEC NombreDeTuStoredProcedure');
  
      // Enviar los resultados como respuesta
      res.json(result.recordset);
    } catch (err) {
      console.error('Error al ejecutar el reporte:', err.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    } finally {
      // Cerrar la conexión a la base de datos
      await sql.close();
    }
  });
  
  // Endpoint para generar el segundo reporte
  app.get('/reporte2', async (req, res) => {
    try {
      // Conectarse a la base de datos
      await sql.connect(dbConfig);
  
      // Leer datos desde la Vista
      const result = await sql.query('SELECT * FROM NombreDeTuVista');
  
      // Enviar los resultados como respuesta
      res.json(result.recordset);
    } catch (err) {
      console.error('Error al ejecutar el reporte:', err.message);
      res.status(500).json({ error: 'Error interno del servidor' });
    } finally {
      // Cerrar la conexión a la base de datos
      await sql.close();
    }
  });
  
// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor escuchando en el puerto ${PORT}`);
});
