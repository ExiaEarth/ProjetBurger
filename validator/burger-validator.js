const yup=require('yup');

const idRegex = /^[a-f\d]{24}$/i;
const statusRegex = /^(created)|(pending)|(done)$/i;
const dateRegex = /^[0-9]{4}-((0[1-9])|(1[0-2]))-[0-3][0-9]$/


const insertburgerValidator=yup.object({
    name :        yup.string().trim().required().min(3).max(255),
    ingredient:   yup.string().trim().required(),
    type:         yup.string().trim().required(),
    description : yup.string().trim().max(2000),
    prix:         yup.number().required(),

});
const updateBurgerValidator=yup.object({
    name :        yup.string().trim().required().min(3).max(255),
    ingredient:   yup.string().trim().required(),
    type:         yup.string().trim().required(),
    description : yup.string().trim().max(2000),
    prix:         yup.number().required(),

});

module.exports={insertburgerValidator,updateBurgerValidator};