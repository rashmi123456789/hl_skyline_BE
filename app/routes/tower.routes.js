module.exports = app => {
    // const auth = require("../middleware/auth");
      const tower = require("../controllers/tower.controller.js");
    
      var router = require("express").Router();
    
      // Create a new tower
      router.post("/", tower.create);
    
      // Retrieve all towers
      router.get("/", tower.findAll);
    
      // Retrieve a single tower with id
      router.get("/:id", tower.findOne);
    
      // // Update a tower with id
      router.put("/:id" ,tower.update);
    
      // Delete a tower with id
      router.delete("/:id" ,tower.delete);
    
      app.use('/api/tower', router);
    };