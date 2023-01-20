const db = require("../models");

// Create and Save a new seo
exports.create = function (req, res, next) {
    
      // Create a seo
      const seo = {
        seo_id:req.body.seo_id,
        project_id:req.body.project_id,
        url:req.body.url,
        meta:req.body.meta
      };
    
      // Save seo in the database
      db.seo.create(seo)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating seo."
          });
        });
  
};

// Retrieve all seo from the database.
exports.findAll = function (request, res, next) {
    db.seo.findAll({attributes: ['seo_id','project_id','url', 'meta']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving seo."
                });
              });
};

// Find a single seo with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.seo.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving seo with id=" + id
        });
      });
  };

// Update a seo by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.seo.update(req.body, {
      where: { seo_id: id }
    })
      .then(
          res.send({
            message: "seo was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating seo with id=" + id
        });
      });
  };
  
// };

// // Delete a seo with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.seo.destroy({
      where: { seo_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "seo was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete seo with id=${id}. Maybe seo was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete seo with id=" + id
        });
      });
  };