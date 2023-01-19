const db = require("../models");
const jwt = require("jsonwebtoken");
const UsedLandUrl = db.used_land;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = function (req, res, next) {
    
      // Create a url
      const used_land_url = {
        url: req.body.url,
      };
    
      // Save url in the database
      db.used_land.create(used_land_url)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            //console.log(err);
          res.status(500).send({
            message:
              err.message || "Some error occurred while saving the url."
          });
        });
  
};

// Retrieve all User from the database.
exports.findAll = function (request, res, next) {
    db.used_land.findAll({attributes: ['url']})
    .then(async data =>{
        await res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving all saved urls."
                });
              });
};