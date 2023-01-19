const db = require("../models");
const Customer = db.cutomer_details;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = function (req, res, next) {
    if (!req.body.first_name) {
        res.status(400).send({
          message: "First name can not be empty!"
        });
        return;
      }
      if (!req.body.email) {
        res.status(400).send({
          message: "Email address can not be empty!"
        });
        return;
      }
    
      // Create a customer
      const customer = {
        first_name: req.body.first_name,
        last_name: req.body.last_name ? req.body.last_name : null,
        email: req.body.email,
        phone: req.body.phone
      };
    
      // Save Tutorial in the database
      db.customer_details.create(customer)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a customer."
          });
        });
  
};

// Retrieve all Customers from the database.
exports.findAll = function (request, res, next) {
    db.customer_details.findAll({attributes: ['customer_id', 'first_name','last_name','email','phone']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving customers."
                });
              });
};

// Find a single Customer with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.customer_details.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Customer with id=" + id
        });
      });
  };

// Update a Customer by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.customer_details.update(req.body, {
      where: { customer_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was updated successfully."
          });
        } else {
          res.send({
            message: `Cannot update Customer with id=${id}. Maybe Customer was not found or req.body is empty!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Customer with id=" + id
        });
      });
  };
  
// };

// // Delete a Customer with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.customer_details.destroy({
      where: { customer_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Customer was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Customer with id=${id}. Maybe Customer was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Customer with id=" + id
        });
      });
  };

// Find all users with given firstname 
exports.findAllWithGivenName=  function (req, res, next) {
    db.customer_details.findAll({ where: { first_name: req.body.first_name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving customers."
        });
      });
  };