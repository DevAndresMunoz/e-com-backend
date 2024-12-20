const express = require('express');
require('dotenv').config();
const cors = require('cors');
const app = express();
app.use(cors({}))

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Server running on Port: ${port}`)
})