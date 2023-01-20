module.exports = app => {
    // const auth = require("../middleware/auth");
      const ameneties = require("../controllers/ameneties.controller.js");
    
      var router = require("express").Router();
    
      // Create a new ameneties
      router.post("/", ameneties.create);
    
      // Retrieve all ameneties
      router.get("/", ameneties.findAll);
    
      // Retrieve a single ameneties with id
      router.get("/:id", ameneties.findOne);
    
      // // Update a ameneties with id
      router.put("/:id" ,ameneties.update);
    
      // Delete a ameneties with id
      router.delete("/:id" ,ameneties.delete);
    
      app.use('/api/ameneties', router);
    };