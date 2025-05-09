const prodModel = require('../model/prodModel.js');

//show
const getProd = async(req,resp)=>{
   try {
    const result = await prodModel.find();
    resp.json(result);
   } catch (error) {
    console.log(error);
    
   }
    
}
//add
const addProd =async(req, resp)=>{
    try {
        const data = new prodModel({
            name:req.body.name,
            price:req.body.price,
            quantity:req.body.quantity
        })
        const result = await data.save();
        resp.json(result);
    } catch (error) {
        console.log(error);
        
    }
}
//update
const updateProd= async(req, resp)=>{
    try {
        const prod = await prodModel.findByIdAndUpdate(req.params.id, req.body,{name:true})
        console.log(prod);
        resp.json(prod);
        
    } catch (err) {
        console.log(err);
        
    }
}
//delte 
const deleteProd= async(req, resp)=>{
    try {
        const prodId = await prodModel.deleteOne({_id:req.params.id})
        console.log(prodId);
        resp.json(prodId);
        
    } catch (err) {
        console.log(err);
        
    }
}

//fetchsingle
const fetchSingle = async (req,resp)=>{
    const {id} = req.params;
    const result = await prodModel.findById(id);
    resp.json(result)
}

module.exports={getProd , addProd , updateProd , deleteProd , fetchSingle};