module.exports = app => {
    // const auth = require("../middleware/auth");
      const contact = require("../controllers/contact.controller.js");
    
      var router = require("express").Router();
    
      // Create a new contact
      router.post("/", contact.create);
    
      // Retrieve all contact
      router.get("/", contact.findAll);
    
      // Retrieve a single contact with id
      router.get("/:id", contact.findOne);
    
      // // Update a contact with id
      router.put("/:id" ,contact.update);
    
      // Delete a contact with id
      router.delete("/:id" ,contact.delete);
    
      app.use('/api/contact', router);
    };