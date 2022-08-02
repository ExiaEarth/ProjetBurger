const User = require("../models/user-model");
const jwtUtils = require("../utils/jwt-utils");

//roles sera un tableau qui contient tous les roles qui ont accès à la route
const authentification=(roles/*option*/)=>{
    return async (req,res,next)=>{
        const authHeader=req.header["authprization"];
        const token=authHeader?authHeader.split(' ')[1]:false;
        // si pas de token
        if (!token) {
            return res.sendStatus(401)  //Unauthorized (-> Nous ne sommes pas autorisés à accéder à cette route)
        }
        // si token
        let decodedToken;
        try {
            decodedToken=await jwtUtils.decode(token);
        } catch (error) {
            return res.sendStatus(403) //Forbidden 
        }
        //Si on a réussi à le décoder, on valide les éventuelles options passées en paramètre
        //On vérifie si on a reçu un tableau de rôles
        if (roles) {
            const userDb=await User.findById(decodedToken.id);
            //On récupère son role
            const userDBRole=userDb.role;
            if (!roles.includes(userDBRole))
            {
                return res.sendStatus(403);//Forbidden (nous n'avons pas les droits)
                
            }
        }
        req.user=decodedToken;
    }
}
module.exports=authentification;