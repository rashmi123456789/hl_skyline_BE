const db = require("../models");

// Create and Save a new Amenties
exports.create = function (req, res, next) {
    
      // Create a housing_unit
      const housing_unit = {
        housing_unit:req.body.id,
        project_id:req.body.project_id
      };
    
      // Save housing_unit in the database
      db.housing_unit.create(housing_unit)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating housing_unit."
          });
        });
  
};

// Retrieve all housing_unit from the database.
exports.findAll = function (request, res, next) {
    db.housing_unit.findAll({attributes: ['housing_unit_id','project_id']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving housing_unit."
                });
              });
};

// Find a single housing_unit with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.housing_unit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving housing_unit with id=" + id
        });
      });
  };

// Update a housing_unit by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.housing_unit.update(req.body, {
      where: { housing_unit_id: id }
    })
      .then(
          res.send({
            message: "housing_unit was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating housing_unit with id=" + id
        });
      });
  };


// // Delete a housing_unit with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.housing_unit.destroy({
      where: { housing_unit_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "housing_unit was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete housing_unit with id=${id}. Maybe housing_unit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete housing_unit with id=" + id
        });
      });
  };