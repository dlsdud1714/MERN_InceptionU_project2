var express = require("express");
var router = express.Router();
const {data, findAllLocalBusiness, findCafe } = require('../db/models/localBusinessModel')

router.get("/", async (req,res)=>{
    try{
        const businessCategories = await findCafe();
        console.log("data", data);
        res.send(businessCategories)
        
    }catch(err){
        
    console.log(err.message)
    }
})


module.exports = router;