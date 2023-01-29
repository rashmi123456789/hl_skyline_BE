const db = require("../models");

// Create and Save a new project_unit
exports.create = function (req, res, next) {
    
      // Create a project_unit
      const project_unit = {
        project_unit_id:req.body.project_unit_id,
        project_id: req.body.project_id,
        type: req.body.type,
        name: req.body.name,
        image: req.body.image,
        alt: req.body.alt,
        beds: req.body.beds,
        baths: req.body.baths,
        floor_area: req.body.floor_area,
        floors_zones:req.body.floors_zones,
        price: req.body.price,
        plan: req.body.plan
      };
    
      // Save tower in the database
      db.project_unit.create(project_unit)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating project_unit."
          });
        });
  
};

// Retrieve all project_unit from the database.
exports.findAll = function (request, res, next) {
    db.project_unit.findAll({attributes: [
        'project_unit_id',
        'project_id',
        'type',
        'name',
        'image',
        'alt',
        'beds',
        'baths',
        'floor_area',
        'floors_zones',
        'price',
        'plan'
    ]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving project_unit."
                });
              });
};

// Find a single project_unit with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.project_unit.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving project_unit with id=" + id
        });
      });
  };

// Update a project_unit by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.project_unit.update(req.body, {
      where: { project_unit_id: id }
    })
      .then(
          res.send({
            message: "project_unit was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating project_unit with id=" + id
        });
      });
  };
  
// };

// // Delete a project_unit with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.tower.destroy({
      where: { project_unit_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "project_unit was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete project_unit with id=${id}. Maybe project_unit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete project_unit with id=" + id
        });
      });
  };