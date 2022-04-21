
const path = require("path");
const multer = require("multer");

const uploadImg = multer({
    storage: multer.diskStorage({
      destination(req, file, cb) {
        cb(null, "postdata/img");
      },
      filename(req, file, cb) {
        const ext = path.extname(file.originalname);
        console.log("file.originalname", file.originalname);
        cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
      },
    }),
  });

  module.exports=uploadImg