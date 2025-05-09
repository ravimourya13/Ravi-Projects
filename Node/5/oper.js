const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/node_q5").then(() => {
    console.log("connected");
}).catch((err) => {
    console.log(err);
});

const empSchema = mongoose.Schema({
    id:Number,
    name:String,
    sal:Number
})

const empModel = mongoose.model("emp",empSchema);

const addEmp = async()=>{
    const data = new empModel({
        id:13,
        name:"ravi",
        sal:25000
    });

const res = await data.save();
console.log(res);
}

addEmp()

const updateEmp = async()=>{
    const res = await empModel.updateOne({id:13},{$set:{sal:30000}});
    console.log(res);
}

updateEmp();

const deleteEmp = async ()=>{
    const res = await empModel.deleteOne({id:13});
    console.log(res);
}

deleteEmp()

const showEmp = async()=>{
    const res = await empModel.find();
    console.log(res);
}

showEmp();