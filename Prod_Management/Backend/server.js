const express = require('express');
const connectDb = require('./db.js');
const router = require('./route/prodRoute.js');
const cors = require("cors")


connectDb();

const app=express();
app.use(express.json());
app.use(cors())

app.get('/test',(req,resp)=>{
    resp.end("hi");
})
app.use('/prod',router);

app.listen(3333,()=>{
    console.log("server is running");
    
})

