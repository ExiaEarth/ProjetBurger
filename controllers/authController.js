
const argon1=require('argon2');

const authController={
    login:async(req,res)=>{
        //Pour se conect, on va recevoir un identifiant et un mdp 
        //et on va devoir vérifier si un utilisateur correspond à ces données
        // "credential" : "monIdentifiant"; //monIdentifiant pourra être soit un pseudo, soit un email
        // "password" : "monPassword"
        const{credential,password}=req.body;
        //filtre :recherche l'utilisateur dont l'email correspond à credential
        //OU son pseudo correspond à la valeur dans credential
        const credentialFilter={$or:[{email:credential},{pseudo:credential}]}
        const user=await User.finOne(credential);
        //vérifie si on a récupérer un utilisateur
        if (!user) {
            return res(401).json({error:'Unauthorized'})
            //401 -> Unauthorized -> Pas les bonnes infos de login
        }
        //Si  un utilisateur,  vérifier si  mdp présent dans le req.body correspond au mdp hash en bdd
        const isPassWordValid=await argon1.argon2.verify(user.password,password);
        //Si le mot de passe de la requête et celui en bdd ne correspondent pas 
        if (!isPassWordValid) {
            return res.status(401).json({error:'Unauthorized'})
        }
        //TODO : générer et renvoyer un token
        const token = await jwtUtils.generate(user);
        return res.json({token});
    },
    register:async(req,res)=>{
        const { pseudo, email, lastname, firstname, password } = req.body;
        const hashedPassword = await argon2.hash(password);
        const userToInsert = User({
            pseudo,
            email,
            lastname,
            firstname,
            password : hashedPassword 
        });
    }
}

module.exports=authController;