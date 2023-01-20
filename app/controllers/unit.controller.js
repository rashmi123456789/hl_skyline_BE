const db = require("../models");

// Create and Save a new unit
exports.create = function (req, res, next) {
    
      // Create a project
      const unit = {
        unit_id:req.body.unit_id,
        zone_id: req.body.zone_id,
        type: req.body.type,
        number_of_units: req.body.number_of_units
      };
    
      // Save unit in the database
      db.unit.create(unit)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating unit."
          });
        });
  
};

// Retrieve all unit from the database.
exports.findAll = function (request, res, next) {
    db.unit.findAll({attributes: ['unit_id','zone_id','type','number_of_units']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving unit."
                });
              });
};

// Find a single unit with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.unit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving unit with id=" + id
        });
      });
  };

// Update a unit by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.unit.update(req.body, {
      where: { unit_id: id }
    })
      .then(
          res.send({
            message: "unit was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating unit with id=" + id
        });
      });
  };
  
// };

// // Delete a unit with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.unit.destroy({
      where: { unit_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "unit was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete unit with id=${id}. Maybe unit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete unit with id=" + id
        });
      });
  };