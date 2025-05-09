const fs = require('fs');

fs.readFile("./temp.txt",(err,data)=>{
    if(err){
        console.log(err)
    }else{
        console.log(data.toString())
    }
})

fs.writeFile("./temp1.txt","Hello",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("file created");
    }
})

fs.unlink("./temp1.txt",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("file deleted")
    }
})

fs.mkdir("./c1",(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("direcxtorry created");
    }
})

fs.rmdir("./c1",(err)=>{
    if(err){
        console.log(err)
    }else{
        console.log("directory deleted");
    }
})