const db = require("../models");

// Create and Save a new Contact
exports.create = function (req, res, next) {
    
      // Create a conact
      const contact = {
        contact_id:req.body.id,
        name:req.body.name,
        phone:req.body.question,
        question:req.body.answer,
        email:req.body.email,
        project_name:req.body.project_name
      };
    
      // Save Contact in the database
      db.contact.create(contact)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating Contact."
          });
        });
  
};

// Retrieve all Contact from the database.
exports.findAll = function (request, res, next) {
    db.contact.findAll({attributes: ['contact_id','name','email','phone','project_name']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving Contact."
                });
              });
};

// Find a single Contact with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.contact.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving faq with id=" + id
        });
      });
  };

// Update a Contact by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.contact.update(req.body, {
      where: { faq_id: id }
    })
      .then(
          res.send({
            message: "faq was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating faq with id=" + id
        });
      });
  };
  
// };

// // Delete a Contact with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.contact.destroy({
      where: { faq_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Contact was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Contact with id=${id}. Maybe Contact was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Contact with id=" + id
        });
      });
  };