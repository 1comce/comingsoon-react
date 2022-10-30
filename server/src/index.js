const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');
require('dotenv').config();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
const db = require('./config/db');
db.connect();

const route = require('./routes');
const { debugPort } = require('process');

app.use(express.json());
app.post('/search', (req, res) => {
    console.log(req.body);
    res.send('');
});
route(app);
app.listen(port, () => {
    console.log(`App listening on port ${port}`);
});
