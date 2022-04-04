const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/citta', (req,res)=>{
    db.query('select * from citta', (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Tutte le città",
                data: result
            })
        } else {
            res.send({
                message: "Non sono stati trovati valori" 
            })   
        }
    }
    );
})

app.get('/citta/:id', (req,res)=>{
    let ID = req.params.id
    db.query('select * from citta where id_citta_pk = ?', [ID], (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                data: result
            })
        } else {
            res.send({
                message: "Non sono stati trovati valori" 
            }) 
        }
    });
})

app.get('/citta/nome/:nome', (req,res)=>{
    let nomeCitta = req.params.nome;
    db.query('select id_citta_pk from citta where nome_citta = ?', [nomeCitta], (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                data: result
            })
        } else {
            res.send({
                message: "Non sono stati trovati valori" 
            }) 
        }
    });
})

app.post('/citta', (req,res) => {
    let nomeCitta = req.body.citta_post;
    db.query('insert into citta(nome_citta) values(?)', [nomeCitta],(err, result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Citta' inserita",
                data: result
            })
        } 
    }) 
})

module.exports = app;