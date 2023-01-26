module.exports = app => {
    // const auth = require("../middleware/auth");
      const housing_unit = require("../controllers/housing_unit.controller.js");
    
      var router = require("express").Router();
    
      // Create a new housing_unit
      router.post("/", housing_unit.create);
    
      // Retrieve all housing_unit
      router.get("/", housing_unit.findAll);
    
      // Retrieve a single housing_unit with id
      router.get("/:id", housing_unit.findOne);

      router.get("/get-housing-details-by-id/:id", housing_unit.getAllHousingUnitDetails);
      router.get("/get-all-details/housing", housing_unit.getAllExistingHousingUnitDetails)
    
      // // Update a housing_unit with id
      router.put("/:id" ,housing_unit.update);
    
      // Delete a housing_unit with id
      router.delete("/:id" ,housing_unit.delete);
    
      app.use('/api/housing_unit', router);
    };