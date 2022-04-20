const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const db = require('./dbService');
const bcrypt = require('bcrypt');
const app = express();

app.use(cors());
app.use(bodyparser.json());

app.get('/utenti', (req,res)=>{
    db.query('select * from utenti', (err,result) => {
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

app.get('/utenti/:id', (req,res)=>{
    let ID = req.params.id
    db.query('select * from utenti where id_utente_pk = ?', [ID], (err,result) => {
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

app.post('/utenti/register', async (req,res)=>{
    try {
        const hashedPassword = await bcrypt.hash(req.body.password_utente, 10)
        const user = {
            nome_utente: req.body.nome_utente,
            mail_utente: req.body.mail_utente,
            password_utente: hashedPassword,
            id_citta_fk: req.body.id_citta_fk
        }
        db.query('insert into utenti(nome_utente,mail_utente,password_utente,id_citta_fk) values(?,?,?,?)', [user.nome_utente, user.mail_utente, user.password_utente, user.id_citta_fk], (err, result) => {
            if(err){
                console.log('Errore');
            }
            if(result){
                console.log('Utente aggiunto');
            } 
        })
        res.status(201).send();
    } catch {
        res.status(500).send();
    }
})

app.post('/utenti/login', async (req, res)=>{
    nome_utente = req.body.nome_utente;
    try {
        db.query('select * from utenti where nome_utente = ?', [nome_utente], async function(err,result) {
            if(err){
                res.status(500).send();
            }
            if(result.length > 0) {
                if(await bcrypt.compare(req.body.password_utente, result[0].password_utente)) {
                    const user = {
                        id_utente_pk: result[0].id_utente_pk,
                        nome_utente: result[0].nome_utente,
                        mail_utente: result[0].mail_utente,
                        id_citta_fk: result[0].id_citta_fk
                    }
                    res.json(user);
                }
                else {
                    res.status(400).send('Non esistono utenti con queste credenziali');
                }
            }
            else {
                res.status(400).send('Non esistono utenti con queste credenziali');
            }
        })  
    } catch {
        res.status(500).send()
    }
})

module.exports = app;