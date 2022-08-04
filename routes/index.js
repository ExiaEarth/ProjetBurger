const authRouter = require('./auth-router');
const burgerRouter = require('./burger-router');
const userRouter = require('./user-router');

// création route "parent"
const router=require('express').Router();

// Paramétrer toutes les routes
// l'arrivée sur le segment /category, nous devons charger le routeur enfant category-routeur
// router.use();

router.use("/burger",burgerRouter);
router.use('/user',userRouter)
router.use("/auth",authRouter);

//export notre routeur parent
module.exports=router