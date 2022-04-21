var express = require("express");

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
      console.log(IMG_URL);
    res.json({url:IMG_URL})
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
