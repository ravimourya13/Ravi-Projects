const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Connectedd to the server");
})

server.listen(2000,()=>{
    console.log("connected");
})