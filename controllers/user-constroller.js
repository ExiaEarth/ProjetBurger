const UserDTO=require("../dto/user-dto");
const User=require("../models/user-model");
// const { getById, update } = require("./category-controller");

const userMapperToDTO=(user)=>new UserDTO(user.id,user.mail,user.pseudo,user.firstname,user.lastname);

const userController={
    getAll:async(req,res)=>{
        const users=await User.find();
        const usersDTO=users.map(userMapperToDTO);
        res.status(200).json(usersDTO);

    },
    getById:async(req,res)=>{
        const id = req.params.id;
        const user=await User.findById(id);
        if (!user) {
            return res.sendStatus(404) // noFound ==> élément non trouvée
        }
        // si trouvée
        const usersDTO=userMapperToDTO(user);
        res.status(200).json(UserDTO);
    },
    update:async(req,res)=>{
        const id = req.params.id;
        const {pseudo,email,firstname,lastname}=req.body
        const userUpdated=await User.findByIdAndUpdate(id,{
            pseudo,
            email,
            firstname,
            lastname,
        },{returnDocument:'after'})
        //l'option returnDocument : 'after' nous permet de récupéré l'utilisateur APRES sa modification et non avant
        //(ce qui est le comportement par défaut)
        if (!userUpdated) {
            return res.sendStatus(404);
            
        }
        const userDTO=userMapperToDTO(userUpdated);
        res.status(200).json(userDTO);
    },
    delete:async(req,res)=>{
        const id=req.params.id;
         //La fonction findByIdAndDelete renvoie l'utilisateur trouvé si id ok, sinon renvoie null
        const userToDelete=await User.findByIdAndDelete(id);
        //vérifie si on a bien récupéré un userToDelete
        if (!userToDelete) {
            return res.sendStatus(404);
        }
        res.sendStatus(204);  //Tout s'est bien passé, id trouvé, plus suppression faite 
    }
}
module.exports=userController;