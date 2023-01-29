module.exports = app => {
    // const auth = require("../middleware/auth");
      const zone = require("../controllers/zone.controller.js");
    
      var router = require("express").Router();
    
      // Create a new zone
      router.post("/", zone.create);
    
      // Retrieve all zone
      router.get("/", zone.findAll);
    
      // Retrieve a single zone with id
      router.get("/:id", zone.findOne);
    
      // // Update a zone with id
      router.put("/:id" ,zone.update);
    
      // Delete a zone with id
      router.delete("/:id" ,zone.delete);
    
      app.use('/api/zone', router);
    };