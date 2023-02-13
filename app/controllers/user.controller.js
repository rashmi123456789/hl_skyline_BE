const db = require("../models");
const bcrypt = require('bcrypt');


// Create and Save a new User
exports.create = function (req, res, next) {

    try {


        const hash = bcrypt.hashSync(req.body.password,10);
    
        // Create a user
        const user = {
          user_id:req.body.user_id,
          username:req.body.username,
          password:hash,
          role:req.body.role,
          status:req.body.status
        };
        
        const result =  db.user.findAll({where : { username:user.username }});

        if (result.length > 0) {
            res.status(401).json({success:false, message: 'This username already exist.!'})
        } else {
              // Save User in the database
            db.user.create(user)
            .then(data => {
                res.send(data);
            })
            .catch(err => {
                res.status(500).send({
                message:
                err.message || "Some error occurred while creating zone."
                });
            });
        }


    } catch (err) {
        res.status(500).send({
            message:
              err.message || "Some error occurred while creating zone."
          });
        
    }

   
  
};

// Retrieve all User from the database.
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

// Find a single User with an id
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

// Update a User by the id in the request
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