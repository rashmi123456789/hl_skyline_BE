module.exports = app => {
    const job = require("../controllers/job.controller.js");
    const auth = require("../middleware/auth");
  
    var router = require("express").Router();
  
    // Create a new Job
    router.post("/",auth, job.create);
  
    // Retrieve all Blogs
    router.get("/", job.findAll);
  
    // Retrieve all Blogs with a specific name
    // router.post("/url", job.findAllWithGiveUrl);

    // router.post("/status", job.findAllWithGivenStatus);
  
    // Retrieve a single Job with id
    router.get("/:id", job.findOne);
  
    // // Update a Job with id
    router.put("/:id",auth, job.update);
  
    // Delete a job with id
    router.delete("/:id", auth, job.delete);
  
    app.use('/api/job', router);
  };