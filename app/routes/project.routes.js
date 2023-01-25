module.exports = app => {
    // const auth = require("../middleware/auth");
      const project = require("../controllers/project.controller.js");
    
      var router = require("express").Router();
    
      // Create a new project
      router.post("/", project.create);
    
      // Retrieve all project
      router.get("/", project.findAll);
    
      // Retrieve a single project with id
      router.get("/:id", project.findOne);
    
      // // Update a project with id
      router.put("/:id" ,project.update);
    
      // Delete a project with id
      router.delete("/:id" ,project.delete);

      router.put("/change-project-status/:name/:status" ,project.updateStatus);

      router.get("/get-project-details/:name", project.getAllProjectDetails)

      router.get("/get-all-project-details/locations", project.getProjectAllLocations)

      router.get("/get-all-project-details/price_ranges", project.getProjectPriceRanges)

      router.get("/get-all-project-details/apartments/:type", project.getProjectApartmentsDetails)

      router.post("/get-all-project-details/search", project.getProjectApartmentsDetailsSearch)
      
      app.use('/api/project', router);
    };