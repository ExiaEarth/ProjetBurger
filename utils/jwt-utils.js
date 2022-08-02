// importe module jsonwebtoken
const jwt = require('jsonwebtoken');
const { Error } = require('mongoose');

const { JWT_AUDIENCE, JWT_ISSUER, JWT_SECRET } = process.env;

const jwtUtils={
    //pour générer un token
    generate:({id,pseudo,role})=>{
    //fonction generate, doit renvoyer une promesse pour vérifier  si notre génération est réussie
    return new Promise((resolve,reject)=>{
            //On récupère nos données pour créer le payload
            const payload={id,pseudo,role};
            //Création des options (du header)
            //Pour générérer un token, nous auront toujours besoin 
            //D'un header/options qui contient toutes les informations sur le token (type, algo, expiration, etc...)
            //D'un payload : Les données de l'utilisateur qu'on veut stocker dans le jeton /!\ JAMAIS DE PASSWORD
        const options={
            algorithm:'HS512',
            expiresIn:'24h',
            audience:JWT_AUDIENCE,
            issuer:JWT_ISSUER
        }
        jwt.sign(payload,JWT_SECRET,option,(error,token)=>{
            if (error) {
        //Si notre génération de token a produit une erreur, on passe notre promesse en rejetée
        return reject(error);
            }
            //Si la génération de token a fonctionné, on résoud la requête en fournissant le token généré
            resolve(token);
        })
    });
    },   
    //Fonction pour décoder un token
    decode:(token)=>{
        // pas de token
        if(!token){
            return Promise.reject(new Error('No Token'));
        }
         //Sinon on renvoie une promesse
         return new Promise((resolve, reject) => {
        // les options pour faire notre décodage
        const options={
            audience:JWT_AUDIENCE,
            issuer:JWT_ISSUER
        }
        jwt.verify(token,JWT_SECRET,otpions,(error,payload)=>{
            if (error) {
                //Si on n'a pas réussi à décoder
                return reject(error);
            }
                //Si on a réussi à décoder
                resolve(playload);
        })
        });
    }
}

module.exports=jwtUtils