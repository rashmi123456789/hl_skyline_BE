
module.exports = app => {
  const multer = require("multer");
  const upload = multer({
    dest: "./config/"
  });

  const fileupload = require("../controllers/fileupload.controller.js");

  var router = require("express").Router();

  router.post("/getfile/:filename",fileupload.getAttachment)
  router.delete("/deletefile/:filename", fileupload.deleteAttachment)

  router.post("/upload/:filename",upload.single("file"),fileupload.postAttachment)

   app.use('/api/file', router);
}