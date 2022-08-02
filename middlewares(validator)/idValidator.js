const mongoose=require('mongoose');

const idValidator=()=>{
    return(req,res,next)=>{
        //récupère l'id de la requête
        const id = res.param.id;
        //Si l'id n'est pas un ObjectId valide..
        if (!mongoose.isValidObjectId(id)) {
            //renvoie une erreur 400
            res.sendStatus(400);
            return;
        }
        //Sinon, on continue la requête grâce au next()
        next();
    }
}
module.exports=idValidator;