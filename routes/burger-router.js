const { get } = require("mongoose");
const burgerController = require("../controllers/burger-controller");
const authentification = require("../middlewares(validator)/auth-jwt-middleware");
const bodyValidation = require("../middlewares(validator)/body-Validation");
const idValidator = require("../middlewares(validator)/idValidator");
const { insertBurgerValidator, updateBurgerValidator } = require("../validator/burger-validator");

const burgerRouter=require("express").Router();

burgerRouter.route('/')
    .get(authentification(),burgerController.getAll)      //Etre connecté  
    .post(authentification(),bodyValidation(insertBurgerValidator),
    burgerController.creat)
     //Etre connecté
burgerRouter.route('/:id')
    .get(authentification(),idValidator(),burgerController.getById)
    .put(authentification(),idValidator(),bodyValidation(updateBurgerValidator),burgerController.update)
    .delete(authentification(["Administrateur"]),idValidator(),burgerController.delete)
burgerRouter.route('/burger/:id')
    .get(authentification(),burgerController.getByCategory)
module.exports=burgerRouter;
