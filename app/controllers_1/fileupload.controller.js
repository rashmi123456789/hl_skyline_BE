const multer = require("multer");
const path = require('path');
const fs = require('fs');

const upload = multer({
    dest: "./config/"
  });

const handleError = (err, res) => {
    res
      .status(500)
      .contentType("text/plain")
      .send(err);
  };

exports.getAttachment= function(req,res,next) {
res.sendFile(path.join(__dirname, "/ATTACHMENTS/"+req.params.filename+".pdf"));
}

exports.deleteAttachment= function(req,res,next) {
  fs.unlink(path.join(__dirname, "/ATTACHMENTS/"+req.params.filename+".pdf"),err => {
    if (err) return handleError(err, res);

    res
          .status(200)
          .contentType("text/plain")
          .send("File deleted!");
  });
  }

exports.postAttachment= function(req,res,next) {
    const tempPath = req.file.path;

    var filename = req.params.filename;
    const targetPath = path.join(__dirname, "/ATTACHMENTS/"+filename+".pdf");

    if (path.extname(req.file.originalname).toLowerCase() === ".pdf") {
      fs.rename(tempPath, targetPath, err => {
        if (err) return handleError(err, res);

        res
          .status(200)
          .contentType("text/plain")
          .send("File uploaded!");
      });
    } else {
      fs.unlink(tempPath, err => {
        if (err) return handleError(err, res);

        res
          .status(403)
          .contentType("text/plain")
          .end("Only .pdf files are allowed!");
      });
    }
}
    
    



