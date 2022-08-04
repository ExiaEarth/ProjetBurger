const yup=require('yup');

const insertBurgerValidator=yup.object({
    name :        yup.string().required().min(3).max(255),
    ingredient:   yup.array().required(),
    type:         yup.array().required(),
    description : yup.string().max(2000),
    prix:         yup.number().required(),

});
const updateBurgerValidator=yup.object({
    name :        yup.string().trim().required().min(3).max(255),
    ingredient:   yup.string().trim().required(),
    type:         yup.string().trim().required(),
    description : yup.string().trim().max(2000),
    prix:         yup.number().required(),

});

module.exports={insertBurgerValidator,updateBurgerValidator};