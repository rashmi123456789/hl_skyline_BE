module.exports = app => {
    const auth = require("../middleware/auth");
    const land = require("../controllers/land.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Land
    router.post("/", auth, land.create);
  
    // Retrieve all Lands
    router.get("/",land.findAll);
  
    // Retrieve all Custoemrs with a specific name
    router.post("/name", land.findAllWithGivenDistrictId);
  
    // Retrieve a single Land with id
    // router.get("/:id", land.findLandDataWithAmentiesData);
    router.get("/:url", land.findLandDataWithAmentiesDatawhenProjectUrlGiven);

    router.get("/all/with-district-name",land.findAllWithDistrictName);

    router.post("/all/with-district-and-city-name",land.findAllWithDistrictAndCityName);

    router.post("/all/get-cities-from-district-name",land.findAllWithCitiesForGivenDistrict)

    router.get("/get-land-from-id/:id", land.findOne);
  
    // // Update a Land with id
    router.put("/:id",auth, land.update);
  
    // Delete a customer with id
    router.delete("/:id",auth, land.delete);

    router.get("/url/get-project-urls",land.findAllProjectUrls);
  
    app.use('/api/land', router);

  };