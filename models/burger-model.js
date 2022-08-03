const { Schema,model,}=require('mongoose');
const burgerSchema= new Schema ({
    // Schema en DB
    name:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    ingredient:{
        type:[String],
        required:true,
    },
    type:{
        type:[String],
        required:true,
    },
    description:{
        type : String,
        trim : true
    },
    prix:{
        type:Number,
    },
},{
    collection:'Burger',
    timestamps:true
})

const Burger=model('Burger',burgerSchema);
module.exports=Burger