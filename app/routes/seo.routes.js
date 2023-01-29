module.exports = app => {
    // const auth = require("../middleware/auth");
      const seo = require("../controllers/seo.controller.js");
    
      var router = require("express").Router();
    
      // Create a new seo
      router.post("/", seo.create);
    
      // Retrieve all seo
      router.get("/", seo.findAll);
    
      // Retrieve a single seo with id
      router.get("/:id", seo.findOne);
    
      // // Update a seo with id
      router.put("/:id" ,seo.update);
    
      // Delete a seo with id
      router.delete("/:id" ,seo.delete);
    
      app.use('/api/seo', router);
};