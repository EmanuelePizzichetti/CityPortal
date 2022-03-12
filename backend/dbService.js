const mysql = require('mysql2');
const dotnev = require('dotenv');

dotnev.config({path: './backend/.env'});

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
});

db.connect(error => {
    if(error){
        console.log('Errore!');
    } else {
        console.log('Database connected');
    }
})

module.exports = db;