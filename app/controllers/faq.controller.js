const db = require("../models");

// Create and Save a new faq
exports.create = function (req, res, next) {
    
      // Create a FAQ
      const faqs = {
        faq_id:req.body.id,
        project_id:req.body.project_id,
        question:req.body.question,
        answer:req.body.answer
      };
    
      // Save FAQ in the database
      db.faq.create(faqs)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating amenties."
          });
        });
  
};

// Retrieve all faqs from the database.
exports.findAll = function (request, res, next) {
    db.faq.findAll({attributes: ['faq_id','project_id','question','answer']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving faqs."
                });
              });
};

// Find a single faqs with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.faq.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving faq with id=" + id
        });
      });
  };

// Update a faq by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.faq.update(req.body, {
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

// // Delete a faq with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.faq.destroy({
      where: { faq_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "faq was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete faq with id=${id}. Maybe faq was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete faq with id=" + id
        });
      });
  };