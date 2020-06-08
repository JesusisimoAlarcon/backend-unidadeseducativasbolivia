const mysql = require('promise-mysql');
const keys = require('../keys');

const pool = mysql.createPool(keys.database);
pool.getConnection().then(Connection => {
    pool.releaseConnection(Connection);
    console.log(`Base de datos ${keys.database.database} conectada con exito`)
});
module.exports = pool;