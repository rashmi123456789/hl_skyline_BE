module.exports = app => {
    const used_land = require("../controllers/used_land_url.controller");
    const auth = require("../middleware/auth");
    var router = require("express").Router();
  
    // Create a new Blog
    router.post("/", used_land.create);
  
    // Retrieve all Blogs
    router.get("/", used_land.findAll);
  
    app.use('/api/used_land_url', router);
  };