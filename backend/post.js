const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/post', (req,res)=>{
    db.query('select * from post', (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Tutti i post",
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

app.get('/post/:id', (req,res)=>{
    let ID = req.params.id
    db.query('select * from post where id_post_pk = ?', [ID], (err,result) => {
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

app.get('/post/filter/:nome', (req,res)=>{
    let nome_citta = req.params.nome;
    db.query('select * from post,citta where post.id_citta_fk = citta.id_citta_pk and citta.nome_citta = ?', [nome_citta], (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Tutti i post da " + nome_citta,
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

app.post('/post', (req,res) => {
    let idUtente = req.body.id_utente_fk;
    let idCitta = req.body.citta_post;
    let titoloPost = req.body.titolo_post;
    let contenutoPost = req.body.contenuto_post;
    db.query('insert into post(titolo_post,contenuto_post,id_utente_fk,id_citta_fk) values(?,?,?,?)', [titoloPost, contenutoPost, idUtente, idCitta], (err, result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Post inserito",
                data: result
            })
        } 
    }) 
})

app.delete('/post/:id', (req,res) => {
    let ID = req.params.id;
    db.query('delete from post where id_post_pk = ?', [ID], (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Post eliminato",
                data: result
            })
        } else {
            res.send({
                message:"Non e' stato eliminato nulla " 
            }) 
        }
    });
})

module.exports = app;