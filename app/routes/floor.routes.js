module.exports = app => {
    // const auth = require("../middleware/auth");
      const floor = require("../controllers/floor.controller.js");
    
      var router = require("express").Router();
    
      // Create a new tower
      router.post("/", floor.create);
    
      // Retrieve all floors
      router.get("/", floor.findAll);
    
      // Retrieve a single floor with id
      router.get("/:id", floor.findOne);
    
      // // Update a floor with id
      router.put("/:id" ,floor.update);
    
      // Delete a floor with id
      router.delete("/:id" ,floor.delete);
    
      app.use('/api/floor', router);
    };