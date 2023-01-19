module.exports = app => {
    const user = require("../controllers/user.controller.js");
    const auth = require("../middleware/auth");
  
    var router = require("express").Router();
  
    // Create a new Job
    router.post("/", user.create);

    router.post("/login", user.login);
  
    // Retrieve all Blogs
    router.get("/",auth, user.findAll);
  
    // Retrieve all Blogs with a specific name
    // router.post("/url", user.findAllWithGiveUrl);

    // router.post("/status", user.findAllWithGivenStatus);
  
    // Retrieve a single Job with id
    router.get("/:id",auth, user.findOne);
  
    // // Update a Job with id
    router.put("/:id", auth,user.update);
  
    // Delete a user with id
    router.delete("/:id", auth,user.delete);
  
    app.use('/api/user', router);
  };