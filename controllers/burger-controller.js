const Burger = require('../models/burger-model');
const burgerController={
    getAll:async(req, res)=>{
    //Pour récupérer le offset et le limit passés dans larequête :
    console.log(req.query)
    const offset = req.query.offset ? req.query.offset : 0;
    const limit = req.query.limit ? req.query.limit : 7;
        
    },
    getById:async(req, res)=>{},
    getByCategory:async(req, res)=>{
        //On récupère l'id de la route, qui contient l'id de notre catégorie
        const idCateg=req.params.id;
        const offset=req.query.offset?req.query.offset:0
        const limit=req.query.limit?req.query.limit:7

        //Filtre pour le status
        // let statusFiltrer;
        // const status=req.query.status;
        // if (status) {
        //     if (Array.isArray(status)) {
        //         statusFiltrer={status:{$in:status}}
        //     } else {
        //         statusFiltrer={status:status}
        //     }
        // } else {
        //     statusFiltrer={}
        // }
        // const typeFilter={catId:idCateg};
        // const burger=await Burger.find({$and:[typeFilter,statusFiltrer]})
        // .populate({
        //     path:ca
        // })
    },
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