var express = require("express");
const {
  createPosts,
  findBusinessPosts,
  addBusinessPost,
  updateBusinessPosts,
  deleteBusinessPost,
  addCommentBusinessPost
} = require("../db/models/businessPostsModel");
const uploadImg = require("../controller/dataController");

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
    const commentAction = req.body.comment;
    const {userId, password, type, license}= req.body.userInfo
    const dataToCreate = req.body.data;
    console.log("post response", req.body);
    //console.log("userId & commentAction", userId, commentAction)
    // let data
    const createNdeletePostNComment =async()=>{

      if(commentAction){
        console.log("commentAction is true");
        const data= await addCommentBusinessPost(businessId, dataToCreate.postId, dataToCreate)
        return data;
      }else if(!commentAction&&type==="client"&&license==="aaaa"){
        if(deleteAction===true){
          console.log("deleteAction is true")
          const data= await deleteBusinessPost(businessId, dataToCreate.postId, dataToCreate)
          return data
        }else{
          const checkNew = await findBusinessPosts(businessId)
          if((checkNew).length===0){
            console.log("data will created")
            const data= await createPosts({businessId:businessId, data: dataToCreate})
            
            return data
          }else{
            console.log("data will be added")
            const data= await addBusinessPost(businessId, dataToCreate)
            
            return data
          }
        }
      }
    }
    
    res.json({status: "success", data:await createNdeletePostNComment()})
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
     res.json({ status: "success", message:"data is up-to-date" });
  }catch(err){
     console.log(err)
   }
 })

module.exports = router;
