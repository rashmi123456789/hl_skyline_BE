const db = require("../models");

// Create and Save a new property
exports.create = function (req, res, next) {
    
      // Create a property
      const property = {
        property_id:req.body.property_id,
        project_id: req.body.project_id,
        property_label: req.body.property_label,
        property_title:req.body.property_title,
        property_image: req.body.property_image,
        property_image_alt:req.body.property_image_alt,
        property_brochure:req.body.property_brochure,
        property_brochure_alt:req.body.property_brochure_alt,
        property_description: req.body.property_description,
        property_spec_label:req.body.property_spec_label,
        property_spec_title:req.body.property_spec_title,
        property_spec_details_spec_1_title:req.body.property_spec_details_spec_1_title,
        property_spec_details_spec_1_details: req.body.property_spec_details_spec_1_details,
        property_spec_details_spec_2_title:req.body.property_spec_details_spec_2_title,
        property_spec_details_spec_2_details:req.body.property_spec_details_spec_2_details,
        property_spec_details_spec_3_title: req.body.property_spec_details_spec_3_title,
        property_spec_details_spec_3_details: req.body.property_spec_details_spec_3_details,
        property_spec_details_spec_4_title:req.body.property_spec_details_spec_4_title,
        property_spec_details_spec_4_details:req.body.property_spec_details_spec_4_details,
        property_spec_slider_image_1:req.body.property_spec_slider_image_1,
        property_spec_slider_image_1_alt: req.body.property_spec_slider_image_1_alt,
        property_spec_slider_image_2: req.body.property_spec_slider_image_2,
        property_spec_slider_image_2_alt:req.body.property_spec_slider_image_2_alt,
        property_spec_slider_image_3: req.body.property_spec_slider_image_3,
        property_spec_slider_image_3_alt:req.body.property_spec_slider_image_3_alt,
        property_spec_slider_image_4: req.body.property_spec_slider_image_4,
        property_spec_slider_image_4_alt:req.body.property_spec_slider_image_4_alt
      };
    
      // Save property in the database
      db.property.create(property)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating property."
          });
        });
  
};

// Retrieve all property from the database.
exports.findAll = function (request, res, next) {
    db.property.findAll({attributes: [
        'property_id',
        'project_id',
        'property_label',
        'property_title',
        'property_image',
        'property_image_alt',
        'property_brochure',
        'property_brochure_alt',
        'property_description',
        'property_spec_label',
        'property_spec_title',
        'property_spec_details_spec_1_title',
        'property_spec_details_spec_1_details',
        'property_spec_details_spec_2_title',
        'property_spec_details_spec_2_details',
        'property_spec_details_spec_3_title',
        'property_spec_details_spec_3_details',
        'property_spec_details_spec_4_title',
        'property_spec_details_spec_4_details',
        'property_spec_slider_image_1',
        'property_spec_slider_image_1_alt',
        'property_spec_slider_image_2',
        'property_spec_slider_image_2_alt',
        'property_spec_slider_image_3',
        'property_spec_slider_image_3_alt',
        'property_spec_slider_image_4',
        'property_spec_slider_image_4_alt'
    ]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving property."
                });
              });
};

// Find a single property with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.property.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving property with id=" + id
        });
      });
  };

// Update a property by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.property.update(req.body, {
      where: { property_id: id }
    })
      .then(
          res.send({
            message: "property was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating property with id=" + id
        });
      });
  };
  
// };

// // Delete a property with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.property.destroy({
      where: { property_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "property was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete property with id=${id}. Maybe job was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete property with id=" + id
        });
      });
  };