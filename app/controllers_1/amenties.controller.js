const db = require("../models");
const Amenties = db.amenties;
const Op = db.Sequelize.Op;

// Create and Save a new Amenties
exports.create = function (req, res, next) {
    
      // Create a amnties
      const amenties = {
        economic_url: req.body.economic_url,
        economic_intro: req.body.economic_intro,

        education_url: req.body.education_url,
        education_intro: req.body.education_intro,

        beauty_url: req.body.beauty_url,
        beauty_intro: req.body.beauty_intro,

        service_url: req.body.service_url,
        service_intro: req.body.service_intro,

        health_url: req.body.health_url,
        health_intro: req.body.health_intro,

        religion_url:req.body.religion_url,
        religion_intro:req.body.religion_intro,
      };
    
      // Save Tutorial in the database
      db.amenties.create(amenties)
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
    db.amenties.findAll({attributes: ['amenties_id','economic_url', 'economic_intro','education_url','education_intro','beauty_url','beauty_intro','service_url','service_intro' ,'health_url', 'health_intro','religion_url','religion_intro']})
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
  
    db.amenties.findByPk(id)
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
  
    db.amenties.update(req.body, {
      where: { amenties_id: id }
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
  
    db.amenties.destroy({
      where: { amenties_id: id }
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