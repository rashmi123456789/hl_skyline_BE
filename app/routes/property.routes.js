module.exports = app => {
    // const auth = require("../middleware/auth");
      const property = require("../controllers/property.controller.js");
    
      var router = require("express").Router();
    
      // Create a new property
      router.post("/", property.create);
    
      // Retrieve all property
      router.get("/", property.findAll);
    
      // Retrieve a single property with id
      router.get("/:id", property.findOne);
    
      // // Update a property with id
      router.put("/:id" ,property.update);
    
      // Delete a property with id
      router.delete("/:id" ,property.delete);
    
      app.use('/api/property', router);
    };