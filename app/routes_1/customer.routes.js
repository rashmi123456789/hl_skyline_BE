module.exports = app => {
    const customers = require("../controllers/customer.controller.js");
    const auth = require("../middleware/auth");
  
    var router = require("express").Router();
  
    // Create a new Customer
    router.post("/", customers.create);
  
    // Retrieve all Customers
    router.get("/", customers.findAll);
  
    // Retrieve all Custoemrs with a specific name
    router.post("/name", customers.findAllWithGivenName);
  
    // Retrieve a single Customer with id
    router.get("/:id", customers.findOne);
  
    // // Update a Customer with id
    router.put("/:id",auth, customers.update);
  
    // Delete a customer with id
    router.delete("/:id",auth, customers.delete);
  
    app.use('/api/customers', router);
  };