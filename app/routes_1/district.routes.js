const { districts } = require("../models/index.js");

module.exports = app => {
    const districts = require("../controllers/district.controller.js");
    const auth = require("../middleware/auth");
    var router = require("express").Router();
  
    // Create a new District
    router.post("/", auth,districts.create);
  
    // Retrieve all Districts
    router.get("/", districts.findAll);

    router.get("/get-one/:id", districts.findOne);
  
    // Retrieve all Districts with a specific name
    router.post("/name", districts.findAllWithGivenName);
  
    // Retrieve a single Land with id
    // router.get("/:id", land.findLandDataWithAmentiesData);
    router.get("/:url", districts.findDistrictDataWithAmentiesDatawhenDistrictUrlGiven);
    // // Update a Districts with id
    router.put("/:id", auth,districts.update);
  
    // Delete a customer with id
    router.delete("/:id",auth, districts.delete);

    router.get("/get-all/districts-with-image",districts.findAllWithDistrictNameLandCountAndImage);

    router.post("/get/land-in/district",districts.findAllLandsInADistrict);

    router.get("/url/get-district-urls",districts.findAllDistrictUrls);
  
  
    app.use('/api/district', router);

  };