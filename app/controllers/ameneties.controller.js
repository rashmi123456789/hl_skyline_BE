const db = require("../models");

// Create and Save a new Amenties
exports.create = function (req, res, next) {
    
      // Create a amnties
      const ameneties = {
        ameneties_id:req.body.id,
        project_id:req.body.project_id,
        ameneties_label:req.body.ameneties_label,
        ameneties_title:req.body.ameneties_title,
        ameneties_details_image:req.body.ameneties_details_image,
        ameneties_details_image_alt:req.body.ameneties_details_image_alt,
        ameneties_details_description:req.body.ameneties_details_description,
        ameneties_image_1:req.body.ameneties_image_1,
        ameneties_image_1_alt:req.body.ameneties_image_1_alt,
        ameneties_image_1_title:req.body.ameneties_image_1_title,
        ameneties_image_1_description:req.body.ameneties_image_1_description,
        ameneties_image_2:req.body.ameneties_image_2,
        ameneties_image_2_alt:req.body.ameneties_image_2_alt,
        ameneties_image_2_title:req.body.ameneties_image_2_title,
        ameneties_image_2_description:req.body.ameneties_image_2_description,
        ameneties_image_horizontal:req.body.ameneties_image_horizontal,
        ameneties_image_horizontal_alt:req.body.ameneties_image_horizontal_alt,
        ameneties_image_horizontal_title:req.body.ameneties_image_horizontal_title,
        ameneties_image_vertical:req.body.ameneties_image_vertical,
        ameneties_image_vertical_alt:req.body.ameneties_image_vertical_alt,
        ameneties_image_vertical_title:req.body.ameneties_image_vertical_title,
      };
    
      // Save Tutorial in the database
      db.ameneties.create(ameneties)
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

// Retrieve all amentiess from the database.
exports.findAll = function (request, res, next) {
    db.ameneties.findAll({attributes: ['ameneties_id','project_id','ameneties_label','ameneties_title','ameneties_details_image','ameneties_details_image_alt','ameneties_details_description','ameneties_image_1','ameneties_image_1_alt','ameneties_image_1_title','ameneties_image_1_description','ameneties_image_2','ameneties_image_2_alt','ameneties_image_2_title','ameneties_image_2_description','ameneties_image_horizontal','ameneties_image_horizontal_alt','ameneties_image_horizontal_title','ameneties_image_vertical','ameneties_image_vertical_alt','ameneties_image_vertical_title','ameneties_short_description']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving amenties."
                });
              });
};

// Find a single amenties with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.ameneties.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving amenties with id=" + id
        });
      });
  };

// Update a amenties by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.ameneties.update(req.body, {
      where: { ameneties_id: id }
    })
      .then(
          res.send({
            message: "amenties was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating amenties with id=" + id
        });
      });
  };
  
// };

// // Delete a amenties with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.ameneties.destroy({
      where: { ameneties_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "amenties was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete amenties with id=${id}. Maybe amenties was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete amenties with id=" + id
        });
      });
  };