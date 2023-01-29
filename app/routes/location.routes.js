module.exports = app => {
    // const auth = require("../middleware/auth");
      const location = require("../controllers/location.controller.js");
    
      var router = require("express").Router();
    
      // Create a new location
      router.post("/", location.create);
    
      // Retrieve all location
      router.get("/", location.findAll);
    
      // Retrieve a single location with id
      router.get("/:id", location.findOne);
    
      // // Update a location with id
      router.put("/:id" ,location.update);
    
      // Delete a location with id
      router.delete("/:id" ,location.delete);
    
      app.use('/api/location', router);
    };