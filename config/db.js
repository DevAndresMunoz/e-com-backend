const { Pool } = require('pg');


const params = {
    user: 'andresmunoz', // Default user
    host: 'localhost',
    database: 'ecommerce', // Replace with your database name
    password: 'your_password', // Replace with your Postgres password
    port: 5432, // Default Postgres port
}
const pool = new Pool(params)

if (pool) {
    console.log("successful")
}

module.exports = pool;