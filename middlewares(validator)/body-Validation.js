const bodyValidation=(yupValidator)=>{
    return async(req,res,next)=>{
        //On essaie de passer la validation
        try {const validData=await yupValidator.noUnknown().validate(req.body,{abortEarly:false});
        req.body=validData;
        next();
        } catch (e) {
        //Si erreur : bad request
            console.log(e);
            return res.sendStatus(400);// bad request
        }
    }
}
module.exports=bodyValidation;