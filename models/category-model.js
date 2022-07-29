// Importation De mongoose
const{Schema,model}=require('mongoose');

// Schema a quoi les catégorie doit ressemblée en DB
const categorySchema=new Schema({
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    composant:{
        // a verifier
        required:true,
        trim:true
    },
    dateCrea:{
        // a verifier pour type
        type:Number,
        required:true,
        trim:true
    },
    type:{
        required:true,
        trim:true
    },
    prix:{
        required:true,
        trim:true
    }
},{
    //Pour indiquer en BDD dans quelle collection on retrouve les catégories
    collection:'Category',
    //Sauvegardera la date de création et dernière date de modification en bdd
    timestamps:true
});

//On génère un model à partir du schema qu'on a crée au dessus
const Category=model('Category',categorySchema);
module.exports=Category
