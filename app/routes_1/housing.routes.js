module.exports = app => {
    const auth = require("../middleware/auth");
    const housing = require("../controllers/housing.controller.js");
  
    var router = require("express").Router();

    router.post("/get-all-housing-with-url",housing.findAllWithProjectURL);
    router.get("/get-all-housing",housing.findAllProjects);
    router.post("/get-all-housing-with-district-and-town",housing.findAllProjectsWithDistrictAndTown);
    router.post("/get-cities-from-district-name", housing.findCitiesWithDistrictName);
    router.post("/get-all-housing-with-id",housing.findAllWithProjectID);
    router.post("/get-zones-with-project-id",housing.findZonesWithProjectId);
    router.post("/get-faq-with-project-id",housing.findFAQsWithProjectId);
    router.post("/get-sliders-with-project-id",housing.findImageSlidersWithProjectId);
    router.post("/get-amentities-with-project-id",housing.findAmentitiesWithProjectId);
    router.post("/get-units-with-zone-id",housing.findUnitsWithZoneId);
    router.post("/get-available-units-count", housing.findAvailableUnitsWithZoneId);
    router.get("/get-all-housing-projects",housing.getAllHousingProjects);
    router.put("/update-housing-project-status-available-units/:project_id", auth, housing.EditHousingProjectByProjectId);
    router.delete("/delete-by-project-id/:project_id",auth, housing.DeleteHousingProjectByProjectId);
    router.post("/create-zone", housing.createZone);
    router.post("/create-unit", housing.createUnits);
    router.post("/create-units-with-all-fields",housing.createUnitsWithAllFields);
    router.post("/create-faq", housing.createFAQ);
    router.post("/crate-image-sider",housing.createHousingImageSlider);
    router.post("/create-housing-project", housing.createHousingProject);
    router.post("/update-housing-unit", housing.updateUnits);
    router.delete("/delete-zone-by-project-id/:project_id",auth, housing.DeleteHousingZoneByProjectId)
    router.delete("/delete-unit-by-zone-id/:zone_id",auth, housing.DeleteHousingUnitByZoneId)
    router.delete("/delete-faq-by-project-id/:project_id",auth, housing.DeleteHousingFAQByProjectId)
    router.delete("/delete-slider-by-slider-id/:slider_id",auth, housing.DeleteHousingImageSliderByImageId)
  
  
    app.use('/api/housing', router);

  };