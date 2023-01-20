const db = require("../models");

// Create and Save a new location
exports.create = function (req, res, next) {
    
      // Create a location
      const zone = {
        zone_id:req.body.zone_id,
        project_id:req.body.project_id,
        name:req.body.name
      };
    
      // Save location in the database
      db.zone.create(zone)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating zone."
          });
        });
  
};

// Retrieve all location from the database.
exports.findAll = function (request, res, next) {
    db.zone.findAll({attributes: ['zone_id','project_id','name']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                // console.log(err)
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving zone."
                });
              });
};

// Find a single location with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.zone.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving zone with id=" + id
        });
      });
  };

// Update a location by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.zone.update(req.body, {
      where: { zone_id: id }
    })
      .then(
          res.send({
            message: "zone was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating zone with id=" + id
        });
      });
  };
  
// };

// // Delete a location with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.zone.destroy({
      where: { zone_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "location was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete location with id=${id}. Maybe location was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete location with id=" + id
        });
      });
  };