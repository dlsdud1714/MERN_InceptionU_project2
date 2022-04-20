var express = require("express");
var router = express.Router();
const {data, findAllLocalBusiness, localBusinesses } = require('../db/models/localBusinessModel')

router.get("/", async (req,res)=>{
    try{
        const businessCategories = await findAllLocalBusiness(localBusinesses);
        res.send(businessCategories)
        
    }catch(err){
        
    console.log(err.message)
    }
})

module.exports = router;