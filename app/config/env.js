/*module.exports = {
    database: 'FAZBEAR_DB',
    username: 'USR_FAZBEAR',
    password: 'password',
    host: '127.0.0.1',
    
    dialect: 'oracle',
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
  */
 // env.js
 module.exports = {
  DB_USER: 'C##DB_FAZBEAR_USR',
  DB_PASSWORD: 'password',
  DB_HOST: '127.0.0.1',  // Cambia Pandnaceous por 127.0.0.1 para asegurar la conexión local
  DB_PORT: '1522',
  DB_NAME: 'xe'  // Cambia FAZBEAR_DB por xe, que es el servicio que está registrado
};
