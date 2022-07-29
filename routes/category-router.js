//importe le module express
const express=require('express');

//A partir de la méthode Router(),construit un nouveau router
const categoryRouter=express.Router();

//Import du controller category
// a faire/!\

//Configuration des différentes routes(méthode 2)
categoryRouter.route('/')
    .get()
    .post()
categoryRouter.route('/id')
    .get()
    .put()
    .delete();

//On exporte router crée et configuré
module.exports=categoryRouter;