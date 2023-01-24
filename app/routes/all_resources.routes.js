module.exports = app => {
    // const auth = require("../middleware/auth");
      const all_resources = require("../controllers/create_all_resources.controller.js");
    
      var router = require("express").Router();
    
      // Create a new project
      router.post("/", all_resources.create);

      app.use('/api/all_resources', router);
};
 
