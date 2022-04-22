var express = require("express");
const createPosts = require('../db/models/businessPostsModel')

const uploadImg = require("../controller/dataController")

var router = express.Router();
const {
  data,
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

router.post("/businessPosts", (req,res)=>{
    try{
        console.log("response", req.body)
        createPosts(req.body)
        res.json({status:"success", data: req.body})
    }catch(err){
        console.log(err);
    }
})

module.exports = router;
