const Burger = require('../models/burger-model');
const burgerController={
    getAll:async(req, res)=>{},
    getById:async(req, res)=>{},
    getByCategory:async(req, res)=>{},
    creat:async(req, res)=>{
        const burgerToAdd=Burger(req.body);
        await burgerToAdd.save();
        res.status(200).json(burgerToAdd);
    },
    update:async(req, res)=>{
        const id = req.params.id;
        const{name,ingredient,type,description,prix}=req.body;
        const burgerUpdated=await Burger.findByIdAndUpdate(id,{
            name,
            ingredient,
            type,
            description:description?description:null,
            prix,
        },{returnDocument:"after"});
        if (!burgerUpdated) {
            return res.sendStatus(404);//Not found
        }
    },
    delete:async(req, res)=>{
        //On a besoin de récupérer l'id de l'élément à supprimer
        const id = req.params.id;
        const burgerToDelete=await Burger.findByIdAndDelete(id);
        if (!burgerToDelete) {
            return res.sendStatus;//Not found
        }
        res.sendStatus(204);

    },
}

module.exports=burgerController;