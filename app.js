// Configuration de l'environement.
require('dotenv-flow').config();

// extrait de process.env.
const {MESSAGE,NODE_ENV,PORT,DB_CONNECTION}=process.env;
console.log('Lancé en',NODE_ENV, ' : ',MESSAGE);

// inport du module mongoose(npm i --s mongoose)
const mongoose = require('mongoose');

// Création du serveur
// import
const express = require('express');
const router = require('./routes');
// inport librairie des erreurs
require('express-async-errors');
// serveur (app)
const app=express();

app.use(async(req,res,next)=>{
    // connextion a la DB
    await mongoose.connect(DB_CONNECTION);
    console.log("Connection réussite !");
     //Une fois qu'elle est correctement établie, on passe à la suite de la requête
    next()
})
app.use('/api',router);
// met le server sur "écoute" sur le port préciser dans la variable d'environnement PORT
app.listen(PORT,()=>{
    console.log(`Serveur en écoute sur le port:${PORT} [${NODE_ENV}]`);
})