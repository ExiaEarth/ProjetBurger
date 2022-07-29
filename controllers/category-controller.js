// import
const Category=require('../models/category-model')

// notre categoryController, qui va contenir toutes les fonctions appelées par chaque route
const categoryController={
    //Toutes ces fonctions devront être asynchrones, on veut pouvoir lancer plusieurs requêtes en même temps
    //Et ne traiter le résultat qu'une fois récupéré ou non de la DB
    getAll:async(req,res)=>{
        const categories=await Category.find();
        // /!\ a modifier plus tard 
        res.sendStatus(501);
    },
    getById:async(req,res)=>{
        // on récupère l'id passé en paramètre
        const id =req.params.id;
        // on effectue la requête en base de données, en fournissant l'id de la catégorie recherchée.On stocke le résultat de cette requête dans une constante category
        const category=await Category.findById(id);
        // On teste si on a effectivement reçu une catégorie
        //console.log(category); //-> Renvoie null si pas de catégorie
        res.sendStatus(200);
    },
    create:async(req,res)=>{
        console.log("Création d'une nouvelle catégorie.");
        res.sendStatus(501);
    },
    update:async(req,res)=>{
        console.log(`Modification de la catégorie dont l'id est [${req.params.id}]`);
        res.sendStatus(501);
    },
    delete:async(req,res)=>{
    console.log(`Suppression de la catégorie dont l'id est [${req.params.id}]`);
    res.sendStatus(501);
    }
}
// exporte controller
module.exports=categoryController;