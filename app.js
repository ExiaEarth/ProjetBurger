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
// inport librairie des erreurs
require('express-async-errors');
