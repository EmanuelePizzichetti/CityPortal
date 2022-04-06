const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/risposte', (req,res)=>{
    db.query('select * from risposte', (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Tutte le risposte",
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

app.get('/risposte/:id', (req,res)=>{
    let ID = req.params.id
    db.query('select * from risposte where id_post_fk = ?', [ID], (err,result) => {
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

app.post('/risposte', (req,res) => {
    let contenutoRisposta = req.body.contenuto_risposta;
    let idPost = req.body.id_post_fk;
    let idUtente = req.body.id_utente_fk; 
    db.query('insert into risposte(contenuto_risposta,id_post_fk,id_utente_fk) values(?,?,?)', [contenutoRisposta, idPost, idUtente], (err, result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Risposta inserita",
                data: result
            })
        } 
    }) 
})

module.exports = app;