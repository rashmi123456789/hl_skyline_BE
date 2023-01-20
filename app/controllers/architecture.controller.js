const db = require("../models");

// Create and Save a new architecture
exports.create = function (req, res, next) {
    
      // Create a architecture
      const architectures = {
        architecture_id:req.body.architecture_id,
        project_id:req.body.project_id,
        architecture_label:req.body.architecture_label,
        architecture_title:req.body.architecture_title,
        architecture_description_1:req.body.architecture_description_1,
        architecture_image_1:req.body.architecture_image_1,
        architecture_image_1_alt:req.body.architecture_image_1_alt,
        architecture_image_1_title:req.body.architecture_image_1_title,
        architecture_image_2:req.body.architecture_image_2,
        architecture_image_2_alt:req.body.architecture_image_2_alt,
        architecture_image_2_title:req.body.architecture_image_2_title,
        architecture_description_2:req.body.architecture_description_2,
        architecture_image_horizontal:req.body.architecture_image_horizontal,
        architecture_image_horizontal_alt:req.body.architecture_image_horizontal_alt,
        architecture_image_horizontal_title:req.body.architecture_image_horizontal_title
      };
    
      // Save architecture in the database
      db.architecture.create(architectures)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating architecture."
          });
        });
  
};

// Retrieve all architecture from the database.
exports.findAll = function (request, res, next) {
    db.architecture.findAll({attributes: ['architecture_id','project_id','architecture_label','architecture_title','architecture_description_1','architecture_image_1','architecture_image_1_alt','architecture_image_1_title','architecture_image_2','architecture_image_2_alt','architecture_image_2_title','architecture_description_2','architecture_image_horizontal','architecture_image_horizontal_alt','architecture_image_horizontal_title']})
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

// Find a single architecture with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.architecture.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving architecture with id=" + id
        });
      });
  };

// Update a architecture by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.architecture.update(req.body, {
      where: { architecture_id: id }
    })
      .then(
          res.send({
            message: "architecture was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating architecture with id=" + id
        });
      });
  };
  
// };

// // Delete a amenties with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.architecture.destroy({
      where: { architecture_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "architecture was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete architecture with id=${id}. Maybe architecture was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete architecture with id=" + id
        });
      });
  };