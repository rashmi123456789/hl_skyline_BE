const { land_proposal } = require("../models/index.js");

module.exports = app => {
  const auth = require("../middleware/auth");
    const landProposal = require("../controllers/land_proposal.controller.js");
  
    var router = require("express").Router();
  
    // Create a new Land
    router.post("/", landProposal.create);
  
    // Retrieve all Lands
    router.get("/", auth,landProposal.findAll);

    router.get("/all",auth, landProposal.findAllLandProposlDataWithCustomerDataAndDistrictName);
  
    // Retrieve all Custoemrs with a specific name
    // router.post("/name", land.findAllWithGivenDistrictId);
  
    // Retrieve a single Land with id
    // router.get("/:id", land.findLandDataWithAmentiesData);
    router.get("/:id", auth,landProposal.findOne);

    router.get("/unread/count", auth,landProposal.findANewMessageCount);

    router.get("/get-land-from-id/:id", auth,landProposal.findOne);
  
    // // Update a Land with id
    router.put("/:id", auth,landProposal.update);
  
    // Delete a customer with id
    router.delete("/:id", auth,landProposal.delete);
  
    app.use('/api/land_proposal', router);
  };