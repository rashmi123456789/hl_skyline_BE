module.exports = app => {
    // const auth = require("../middleware/auth");
      const project_unit = require("../controllers/project_unit.controller.js");
    
      var router = require("express").Router();
    
      // Create a new project_unit
      router.post("/", project_unit.create);
    
      // Retrieve all project_unit
      router.get("/", project_unit.findAll);
    
      // Retrieve a single project_unit with id
      router.get("/:id", project_unit.findOne);
    
      // // Update a project_unit with id
      router.put("/:id" ,project_unit.update);
    
      // Delete a project_unit with id
      router.delete("/:id" ,project_unit.delete);
    
      app.use('/api/project_unit', router);
};