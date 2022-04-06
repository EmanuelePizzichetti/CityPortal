const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const dotnev = require('dotenv');
const db = require('./dbService');
const utenti = require('./utenti');
const post = require('./post');
const citta = require('./citta');
const risposte = require('./risposte');

dotnev.config({path: './backend/.env'});

const app = express();
app.use(cors());
app.use(bodyparser.json());
app.use('/', utenti);
app.use('/', post);
app.use('/', citta);
app.use('/', risposte);

app.listen(3000, () => {
    console.log('Server running ...');
})