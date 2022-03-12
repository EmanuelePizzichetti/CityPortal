const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotnev = require('dotenv');
const utenti = require('./utenti')
const db = require('./dbService');
const post = require('./post');

dotnev.config({path: './backend/.env'});

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/', utenti);
app.use('/', post);

app.listen(3000, () => {
    console.log('Server running ...');
})