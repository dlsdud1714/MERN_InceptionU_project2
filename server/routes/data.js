var express = require("express");
const {
  createPosts,
  findBusinessPosts,
  addBusinessPost,
  updateBusinessPosts,
  deleteBusinessPost,
  addCommentBusinessPost,
  updateCommentBusinessPost
} = require("../db/models/businessPostsModel");
const uploadImg = require("../controller/dataController");

var router = express.Router();
const {
  findAllLocalBusiness,
  localBusinesses,
} = require("../db/models/localBusinessModel");


const mustBeLoggedIn = (req, res, next) => {
  console.log('reached must be logged in')
  console.log(req.user)
  if (req.user) {
    return next();
  }
  res.sendStatus(401)
  console.log('unauthorized')
}

const mustBeBusinessOwner = (req, res, next) => {
  console.log('reached must be logged in')
  console.log(req.user)
  if (req.user) {
    return next();
  }
  res.sendStatus(401)
  console.log('Not a business owner')
}

router.get("/", async (req, res) => {
  console.log(`/data req.user is ${req.user}`)
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

//------for Editor(aceess only for business onwer)--------
//posting- create and add
router.post("/business/post/:businessId", async (req, res) => {
  try {
    const businessId = req.params.businessId;
    const dataToCreate = req.body;
    console.log("id and data", businessId, dataToCreate);

    const checkNew = await findBusinessPosts(businessId);
    if (checkNew.length === 0) {
      console.log("data will created");
      const data = await createPosts({
        businessId: businessId,
        data: dataToCreate,
      });

      return res.status(200).json(data);
    } else {
      console.log("data will be added");
      const data = await addBusinessPost(businessId, dataToCreate);

      return res.status(200).json(data);
    }
  } catch (err) {
    console.log("error:", err);
  }
});

//posting--update

router.patch("/business/post/:businessId", async (req, res) => {
  try {
    const id = req.params.businessId;
    const dataToUpdate = req.body;
    console.log("datatoupdate and id", dataToUpdate, id);
    const data = await updateBusinessPosts(id, req.body.postId, dataToUpdate);
    console.log("Updateddata ", data);
    return res.status(200).json(data);
  } catch (err) {
    console.log("error:", err);
  }
});

//posting--delete
router.delete("/business/post/:businessId/:postId", async (req, res) => {
  try {
    const id = req.params.businessId;
    const postId = req.params.postId

    console.log("deleteAction is true", id, postId);
    const data = await deleteBusinessPost(id, postId);
    
    return res.status(200).json(data);
  } catch (err) {
    console.log("Error:", error);
  }
});

//======To handle comment query (Access only for all users)========
router.post("/business/:businessId/comment/:postId", async(req,res)=>{
    const businessId = req.params.businessId;
    const postId = req.params.postId;
    const commentToAdd = req.body;
  try{
    console.log("commentAdd is true",`id: ${businessId},postid: ${postId},commentToUpdate: ${commentToAdd}`);
        const data = await addCommentBusinessPost(businessId, postId, commentToAdd );
        return res.status(200).json(data);
  }catch(err){
    console.log('Error is', err)
  }
})

router.put("/business/:businessId/comment/:postId", async(req,res)=>{
  const businessId = req.params.businessId;
    const postId = req.params.postId;
    const commentToUpdate = req.body;
    try{
      console.log("commentUpdate is true",`id: ${businessId},postid: ${postId},commentToUpdate: ${commentToUpdate}`);
          const data = await updateCommentBusinessPost(businessId, postId, commentToUpdate );
          return res.status(200).json(data);
    }catch(err){
      console.log('Error is', err)
    }
})

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
