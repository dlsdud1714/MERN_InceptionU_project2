var express = require("express");
const {
  createPosts,
  findBusinessPosts,
  addBusinessPost,
  updateBusinessPosts,
  deleteBusinessPost
} = require("../db/models/businessPostsModel");
const uploadImg = require("../controller/dataController");

var router = express.Router();
const {
  findAllLocalBusiness,
  localBusinesses,
} = require("../db/models/localBusinessModel");
const { route } = require("express/lib/application");

router.get("/", async (req, res) => {
  try {
    const businessCategories = await findAllLocalBusiness(localBusinesses);
    res.send(businessCategories);
  } catch (err) {
    console.log(err.message);
  }
});

router.post("/img", uploadImg.single("img"), (req, res) => {
  try {
    const IMG_URL = `/img/${req.file.filename}`;
    res.json({ url: IMG_URL });
  } catch (err) {
    console.log(err);
  }
});

//delete and create posts 
router.post("/businessPosts/:id", async (req, res) => {
  try {
    const businessId = req.params.id;
    //const createAction = req.body.create;
    const deleteAction = req.body.delete;
    const dataToCreate = req.body.data;
    console.log("post response", dataToCreate, deleteAction);
    let data
    if(deleteAction===true){
      console.log("deleteAction is true")
      const data= await deleteBusinessPost(businessId, dataToCreate.postId, dataToCreate)
      console.log("data deleted",data)
    }else{
      const checkNew = await findBusinessPosts(businessId)
      if((checkNew).length===0){
        console.log("data will created")
        data= await createPosts({businessId:businessId, data: dataToCreate})
      }else{
        console.log("data will be added")
      }
        data= await addBusinessPost(businessId, dataToCreate)
    }
    // console.log("data to send", data)
    res.json({status: "success", message:"data is"})
  } catch (err) {
    console.log(err);
  }
});

router.get("/businessPosts/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const businessData = await findBusinessPosts(id);
    res.json({ status: "success", data: businessData });
  } catch (err) {
    console.log(err);
  }
});
//update posts
 router.patch("/businessPosts/:id", async (req,res)=>{
  try{
     const id =req.params.id;
     const dataToUpdate= req.body;
     console.log("patch response", dataToUpdate, id);
     const data= await updateBusinessPosts(id, req.body.postId, dataToUpdate)
     console.log("Updateddata ", data)
  }catch(err){
     console.log(err)
   }
 })

module.exports = router;
