module.exports = app => {
    // const auth = require("../middleware/auth");
      const job = require("../controllers/job.controller.js");
    
      var router = require("express").Router();
    
      // Create a new job
      router.post("/", job.create);
    
      // Retrieve all job
      router.get("/", job.findAll);
    
      // Retrieve a single job with id
      router.get("/:id", job.findOne);
    
      // // Update a job with id
      router.put("/:id" ,job.update);
    
      // Delete a job with id
      router.delete("/:id" ,job.delete);
    
      app.use('/api/job', router);
};