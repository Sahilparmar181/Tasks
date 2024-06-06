const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const task = require('./routes/routs');

const app = express();

// Use CORS middleware
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/api/tasks', task);

const PORT = process.env.PORT || 9000;

app.listen(PORT, () => console.log("Server is running on port", PORT));
