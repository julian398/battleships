const functions = require("firebase-functions");
const express = require('express')
const admin = require('firebase-admin');
const { json } = require("express");

const app = express()
admin.initializeApp({
    credential: admin.credential.cert('./credentials.json')
    
})

const db = admin.firestore();

app.post('/api/searchRoom1v1'), (req, res) =>{
    try{
        const player= 0;
        const tablero=0;
        const docref= db.collection('Partidas 1v1');
        for(let i =0; i<5; i++){
            const room= docref.doc(i).get();
            if(room.data().Jugador1===""){
                tablero=i;
                await docref.doc(i).update({
                    Jugador1: req.body.nameTag,
                    
                })
                for(let j=0;j<10;j++){
                    row= req.body.board[j]
                    await docref.doc(i).update({
                        Tablero1: admin.firestore.FieldValue.arrayRemove(j),
                        Tablero1: admin.firestore.FieldValue.arrayUnion(row)
                    })
                }
                player=1;
                break;
            }else if(room.data().Jugador2===""){
                tablero=i;
                await docref.doc(i).update({
                    Jugador2: req.body.nameTag
                })
                for(let j=0;j<10;j++){
                    row= req.body.board[j]
                    await docref.doc(i).update({
                        Tablero2: admin.firestore.FieldValue.arrayRemove(j),
                        Tablero2: admin.firestore.FieldValue.arrayUnion(row)
                    })
                }
                break;
                player=1;
            }
        }
        return res.status(204).json(tablero, player);
    }catch(error){
        return res.status(500).send(error);
    }
};

exports.app= functions.https.onRequest(app);
