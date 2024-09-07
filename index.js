const oracledb = require('oracledb');
const config = require('./app/config/env'); // archivo env.js

async function init() {
  let connection;

  try {
    connection = await oracledb.getConnection({
      user: config.DB_USER,
      password: config.DB_PASSWORD,
      connectString: `${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`
    });

    console.log('Conectado a Oracle Database');
    const result = await connection.execute('SELECT * FROM usuario');
    console.log(result.rows);
  } catch (err) {
    console.error('Error al conectar:', err);
  } finally {
    if (connection) {
      try {
        await connection.close();
      } catch (err) {
        console.error('Error al cerrar la conexión:', err);
      }
    }
  }
}

init();
