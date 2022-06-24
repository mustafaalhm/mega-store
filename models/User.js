const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({

    name:{
        type:String,
        required :[true,'name is required'],
        minlength : [2 ,' Name Can`t Be Less Than 2 Charcter'],
        maxlength : [64 ,' Name Can`t Be Greater Than 64 Charcter'],
    },
    email:{
        type:String,
        required :[true,'Email is required'],
        maxlength : [128 ,' Email Can`t Be Greater Than 128 Charcter'],
        index:true,
    },
    password:{
        type:String,
        required :[true,'Email is required'],
    },
    isActive :{
        type:Boolean,
        default :true
    },
    isDeleted :{
        type:Boolean,
        default :false
    },


},{
    timestamps:true
});



module.exports = mongoose.model('Users',userSchema);

