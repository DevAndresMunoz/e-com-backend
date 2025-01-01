const express = require('express');
const cors = require('cors');
const app = express();
const seedUsers = require('./user_data');
require('dotenv').config();
const { Pool } = require('pg');
app.use(cors({}))

const port = process.env.PORT

const pool = new Pool({
    user: 'andresmunoz',
    host: 'localhost',
    database: 'users',
    password: 'codezone',
    port: 5432,
});

module.exports = pool;

// app.get("/user-data", (req, res) => {
//     res.json(userData)
// })

seedUsers();

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})