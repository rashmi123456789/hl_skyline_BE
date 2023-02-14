module.exports = app => {
    const { userValidator } = require("../middleware/validateUser.js");
      const user = require("../controllers/user.controller.js");
    
      var router = require("express").Router();
    
      // Create a new user
      router.post("/", user.create);

      // get Current user
      router.get("/me", userValidator, user.findCurrentUser);
    
      // Retrieve all unit
    //   router.get("/", unit.findAll);
    
      // Retrieve a single unit with id
    //   router.get("/:id", unit.findOne);
    
      // // Update a unit with id
    //   router.put("/:id" ,unit.update);
    
      // Delete a unit with id
    //   router.delete("/:id" ,unit.delete);
    
      app.use('/api/user', router);
    };