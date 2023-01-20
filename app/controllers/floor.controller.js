const db = require("../models");

// Create and Save a new faq
exports.create = function (req, res, next) {
    
      // Create a FAQ
      const floors = {
        floor_id:req.body.id,
        tower_id:req.body.tower_id,
        name:req.body.name,
        type:req.body.type,
        number_of_units:req.body.number_of_units
      };
    
      // Save FAQ in the database
      db.faq.create(floors)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating floors"
          });
        });
  
};

// Retrieve all floors from the database.
exports.findAll = function (request, res, next) {
    db.floor.findAll({attributes: ['floor_id','tower_id','name','type', 'number_of_units']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving floor."
                });
              });
};

// Find a single floor with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.floor.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving floor with id=" + id
        });
      });
  };

// Update a faq by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.floor.update(req.body, {
      where: { floor_id: id }
    })
      .then(
          res.send({
            message: "faq was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating faq with id=" + id
        });
      });
  };
  
// };

// // Delete a floor with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.floor.destroy({
      where: { floor_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "floor was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete floor with id=${id}. Maybe faq was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete floor with id=" + id
        });
      });
  };