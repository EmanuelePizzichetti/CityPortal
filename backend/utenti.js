const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/utenti', (req,res)=>{
    let query = "select * from utenti";
    db.query(query, (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Tutti gli utenti",
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

app.get('/utenti/:nome', (req,res)=>{
    let nomeUtente = req.params.nome;
    let query = "select * from utenti where nome_utente ='"+ nomeUtente +"'";
    db.query(query, (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "utente con nome " + nomeUtente,
                data: result
            })
        } else {
            res.send({
                message: "Non sono stati trovati valori" 
            }) 
        }
    });
})

module.exports = app;