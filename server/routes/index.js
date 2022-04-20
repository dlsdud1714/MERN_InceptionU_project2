var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/home", function (req, res, next) {
  res.send({ Home: "Homepage" });
});

router.get("/categories/:name", function (req, res, next) {
  const name = req.params.name;
  if (name == "food") {
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
});

router.get("/categories/:name/:business", function (req, res, next) {
  res.send("business");
});

module.exports = router;
