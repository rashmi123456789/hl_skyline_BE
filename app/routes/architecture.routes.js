module.exports = app => {
    // const auth = require("../middleware/auth");
      const architecture = require("../controllers/architecture.controller.js");
    
      var router = require("express").Router();
    
      // Create a new architecture
      router.post("/", architecture.create);
    
      // Retrieve all architecture
      router.get("/", architecture.findAll);
    
      // Retrieve a single architecture with id
      router.get("/:id", architecture.findOne);
    
      // // Update a architecture with id
      router.put("/:id" ,architecture.update);
    
      // Delete a architecture with id
      router.delete("/:id" ,architecture.delete);
    
      app.use('/api/architecture', router);
    };