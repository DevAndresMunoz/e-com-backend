const express = require('express');
const cors = require('cors');
const app = express();
const userData = require('./user_data');
require('dotenv').config();
app.use(cors({}))


const port = process.env.PORT


app.get("/user-data", (req, res) => {
    res.json(userData)
})

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})