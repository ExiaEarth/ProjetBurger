const userController = require('../controllers/user-constroller');
const authentification = require('../middlewares(validator)/auth-jwt-middleware');
const bodyValidation = require('../middlewares(validator)/body-Validation');
const idValidator = require('../middlewares(validator)/idValidator');
const userValidator = require('../validator/user-validator');



const userRouter=require('express').Router()

userRouter.route('/').get(authentification(),userController.getAll)
userRouter.route('/id')
    .get(authentification(),idValidator(),userController.getById)
    .put(authentification(["admin"]),idValidator(),bodyValidation(userValidator),userController.update)
    .delete(authentification(["admin"]),idValidator(),userController.delete)

module.exports=userRouter;