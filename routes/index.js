const userRouter = require('./user-router');

// création route "parent"
const router=require('express').Router();

// Paramétrer toutes les routes
// l'arrivée sur le segment /category, nous devons charger le routeur enfant category-routeur
// router.use();

router.use('/category',/*categoryRouter*/);
// burger
// router.use('/user',userRouter)

//export notre routeur parent
module.exports=router