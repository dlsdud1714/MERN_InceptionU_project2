var express = require("express");
const {createPosts, findBusinessPosts, updataBusinessPosts} = require('../db/models/businessPostsModel')
const uploadImg = require("../controller/dataController")

var router = express.Router();
const {
  findAllLocalBusiness,
  localBusinesses,
} = require("../db/models/localBusinessModel");


router.get("/", async (req, res) => {
  try {
    const businessCategories = await findAllLocalBusiness(localBusinesses);
    res.send(businessCategories);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/img",uploadImg.single('img') ,(req, res) => {
  try {
      const IMG_URL = `/img/${req.file.filename}`;
    res.json({url:IMG_URL})
  } catch (err) {
    console.log(err);
  }
});

router.post("/businessPosts", async(req,res)=>{
    try{
        console.log("response", req.body)
          const update = await updataBusinessPosts(req.body.businessId,req.body.data.postId,req.body.data)
       if(update.matchedCount===0){
         await createPosts(req.body);
       } 
        res.json({status:"success", data: req.body})
    }catch(err){
        console.log(err);
    }
});

router.get("/businessPosts/:id", async(req,res)=>{
    try{
        const id= req.params.id;
        const businessData = await findBusinessPosts(id);
        res.json({status:"success", data: businessData})
    }catch(err){
        console.log(err)
    }
})


module.exports = router;
