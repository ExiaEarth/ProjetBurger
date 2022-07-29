const categoryRouter = require('./category-router');

// création route "parent"
const router=require('express').Router();

// Paramétrer toutes les routes
// l'arrivée sur le segment /category, nous devons charger le routeur enfant category-routeur
router.use('/category',categoryRouter);
// router.use();

//export notre routeur parent
module.exports=router