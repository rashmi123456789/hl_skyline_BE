const db = require("../models");

// Create and Save a new tower
exports.create = function (req, res, next) {
    
      // Create a tower
      const tower = {
        tower_id:req.body.tower_id,
        project_id:req.body.project_id,
        name:req.body.name
      };
    
      // Save tower in the database
      db.tower.create(tower)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating tower."
          });
        });
  
};

// Retrieve all tower from the database.
exports.findAll = function (request, res, next) {
    db.tower.findAll({attributes: ['tower_id','project_id','name']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving tower."
                });
              });
};

// Find a single tower with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.tower.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving tower with id=" + id
        });
      });
  };

// Update a tower by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.tower.update(req.body, {
      where: { tower_id: id }
    })
      .then(
          res.send({
            message: "tower was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating tower with id=" + id
        });
      });
  };
  
// };

// // Delete a tower with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.tower.destroy({
      where: { tower_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "tower was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete tower with id=${id}. Maybe tower was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete tower with id=" + id
        });
      });
  };