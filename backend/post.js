const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/post', (req,res)=>{
    let query = "select * from post";
    db.query(query, (err,result) => {
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
    let query = "select * from post where id_post_pk ='"+ ID +"'";
    db.query(query, (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "post con ID " + ID,
                data: result
            })
        } else {
            res.send({
                message: "Non sono stati trovati valori" 
            }) 
        }
    });
})

app.post('/post', (req,res) => {
    let idUtente = 1;
    let idCitta = req.body.citta_post;
    let titoloPost = req.body.titolo_post;
    let contenutoPost = req.body.contenuto_post;
    let query = "insert into post(titolo_post,contenuto_post,id_utente_fk,id_citta_fk) values('"+titoloPost+"','"+contenutoPost+"',"+idUtente+","+idCitta+")";
    db.query(query,(err, result) => {
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

app.put('/post/:id', (req,res) => {
    let ID = req.params.id
    let nomeUtente = req.body.nome_utente;
    let titoloPost = req.body.titolo_post;
    let contenutoPost = req.body.contenuto_post;
    let cittaPost = req.body.citta_post;
    let query = "update post set nome_utente='"+nomeUtente+"', titolo_post='"+titoloPost+"', contenuto_post='"+contenutoPost+"', citta_post='"+cittaPost+"' where id_post_pk='"+ID+"'" ;
    db.query((query), (err,result) => {
        if(err){
            console.log('Errore');
        }
        if(result){
            res.send({
                message: "Post modificato",
                data: result
            })
        } else {
            res.send({
                message: "Modifica non effettuata" 
            }) 
        }
    }); 
})

app.delete('/post/:id', (req,res) => {
    let ID = req.params.id;
    let query = "delete from post where id_post_pk ='"+ ID +"'";
    db.query(query, (err,result) => {
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