const db = require("../models");

// Create and Save a new location
exports.create = function (req, res, next) {
    
      // Create a location
      const locations = {
        location_id:req.body.location_id,
        project_id:req.body.project_id,
        location_label:req.body.location_label,
        location_title:req.body.location_title,
        location_description:req.body.location_description,
        location_g_map_location:req.body.location_g_map_location,
        location_amenity_1:req.body.location_amenity_1,
        location_amenity_1_details:req.body.location_amenity_1_details,
        location_amenity_2:req.body.location_amenity_2,
        location_amenity_2_details:req.body.location_amenity_2_details,
        location_amenity_3:req.body.location_amenity_3,
        location_amenity_3_details:req.body.location_amenity_3_details,
        location_amenity_4:req.body.location_amenity_4,
        location_amenity_4_details:req.body.location_amenity_4_details
      };
    
      // Save location in the database
      db.location.create(locations)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating location."
          });
        });
  
};

// Retrieve all location from the database.
exports.findAll = function (request, res, next) {
    db.location.findAll({attributes: ['location_id','project_id','location_label','location_title','location_description','location_g_map_location','location_amenity_1','location_amenity_1_details','location_amenity_2','location_amenity_2_details','location_amenity_3','location_amenity_3_details','location_amenity_4','location_amenity_4_details']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving location."
                });
              });
};

// Find a single location with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.location.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving location with id=" + id
        });
      });
  };

// Update a location by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.location.update(req.body, {
      where: { location_id: id }
    })
      .then(
          res.send({
            message: "location was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating location with id=" + id
        });
      });
  };
  
// };

// // Delete a location with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.location.destroy({
      where: { location_id: id }
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