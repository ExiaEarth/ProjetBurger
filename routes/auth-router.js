const authController = require('../controllers/authController');
const bodyValidation = require('../middlewares(validator)/body-Validation');
const { loginValidator, registerValidator } = require('../validator/auth-validator');


const authRouter=require('express').Router();

authRouter.post('/login',bodyValidation(loginValidator),authController.login);
authRouter.post('/register',bodyValidation(registerValidator),authController.register);

module.exports=authRouter;