module.exports = app => {
    // const auth = require("../middleware/auth");
      const faq = require("../controllers/faq.controller.js");
    
      var router = require("express").Router();
    
      // Create a new faq
      router.post("/", faq.create);
    
      // Retrieve all faq
      router.get("/", faq.findAll);
    
      // Retrieve a single faq with id
      router.get("/:id", faq.findOne);
    
      // // Update a faq with id
      router.put("/:id" ,faq.update);
    
      // Delete a faq with id
      router.delete("/:id" ,faq.delete);
    
      app.use('/api/faq', router);
};