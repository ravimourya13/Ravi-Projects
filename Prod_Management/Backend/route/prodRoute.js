const express = require('express');
const prod = require('../controller/prodController.js');

const router = express.Router();

router.get("/showprod",prod.getProd);
router.post("/addprod",prod.addProd);
router.put("/updateprod/:id", prod.updateProd);
router.delete("/deleteprod/:id",prod.deleteProd)
router.get("/fetchsingle/:id",prod.fetchSingle);

module.exports=router;

