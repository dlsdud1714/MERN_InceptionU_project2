var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.send({ Home: "Homepage" });
});

router.get("/about", function (req, res, next){
  res.send({About: "About Page"});
});

router.get("/categories/:name", function (req, res, next) {
  const name = req.params.name;
  if (name == "fastFood") {
    res.send("For food");
  }
  if (name == "clothing") {
    res.send("For clothing");
  }
  if (name == "recreation") {
    res.send("For recreation");
  }
  if (name == "autoService") {
    res.send("For auto service");
  }
  if (name == "restaurant") {
    res.send("For restaurants")
  }
  if (name =="pets") {
    res.send("For pets")
  }
  if (name == "cafe"){
    res.send("For cafe")
  }
  if (name == "clothing"){
    res.send("For clothing")
  }
  if (name == "groceries"){
    res.send("For groceries")
  }
});

router.get("/categories/:name/:business", function (req, res, next) {
  res.send("business");
});

module.exports = router;
