const mongoose = require('mongoose');

const prodSchema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    quantity:{
        type:Number,
        required:true
    }
})
const prodModel = mongoose.model("prod",prodSchema);
//middle
module.exports=prodModel;



