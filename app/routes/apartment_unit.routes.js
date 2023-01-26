const { housing_unit } = require("../models/index.js");

module.exports = app => {
    // const auth = require("../middleware/auth");
      const apartment_unit = require("../controllers/apartment_unit.controller.js");
    
      var router = require("express").Router();
    
      // Create a new apartment_unit
      router.post("/", apartment_unit.create);
    
      // Retrieve all apartment_units
      router.get("/", apartment_unit.findAll);
    
      // Retrieve a single apartment_unit with id
      router.get("/:id", apartment_unit.findOne);

      router.get("/get-all-apartment-unit-details-by-id/:id", apartment_unit.getAllApartmentUnitDetails)
      router.get("/get-all-existing-details/apartment", apartment_unit.getAllExistingApartmentUnitDetails);
    
      // // Update a apartment_unit with id
      router.put("/:id" ,apartment_unit.update);
    
      // Delete a apartment_unit with id
      router.delete("/:id" ,apartment_unit.delete);
    
      app.use('/api/apartment_unit', router);
    };