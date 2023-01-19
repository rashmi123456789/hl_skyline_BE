const { user_message } = require("../models/index.js");

module.exports = app => {
    const userMessage = require("../controllers/user_message.controller.js");
    const auth = require("../middleware/auth");
  
    var router = require("express").Router();
  
    // Create a new message
    router.post("/",userMessage.create);
  
    // Retrieve all messages
    router.get("/", auth,userMessage.findAll);

    router.get("/all", auth,userMessage.findAllMesagesDataWithCustomerData);

    router.get("/unread/count",auth, userMessage.findANewMessageCount);
  
    // Retrieve all Custoemrs with a specific name
    // router.post("/name", land.findAllWithGivenDistrictId);
  
    // Retrieve a single Land with id
    // router.get("/:id", land.findLandDataWithAmentiesData);
    router.get("/:id", auth,userMessage.findOne);
  
    // // Update a Land with id
    router.put("/:id", auth,userMessage.update);
  
    // Delete a customer with id
    router.delete("/:id",auth, userMessage.delete);
  
    app.use('/api/user_message', router);
  };