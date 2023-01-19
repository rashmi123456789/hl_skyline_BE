module.exports = app => {
  const auth = require("../middleware/auth");
    const amenties = require("../controllers/amenties.controller.js");
  
    var router = require("express").Router();
  
    // Create a new amenties
    router.post("/", auth,amenties.create);
  
    // Retrieve all amenties
    router.get("/", amenties.findAll);
  
    // Retrieve a single amenties with id
    router.get("/:id", amenties.findOne);
  
    // // Update a amenties with id
    router.put("/:id",  auth,amenties.update);
  
    // Delete a amenties with id
    router.delete("/:id",  auth,amenties.delete);
  
    app.use('/api/amenties', router);
  };