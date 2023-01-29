const db = require("../models");

// Create and Save a new Amenties
exports.create = function (req, res, next) {
    
      // Create a amnties
      const apartment_unit = {
        apartment_unit_id:req.body.apartment_unit_id,
        project_id:req.body.project_id,
      };
    
      // Save Tutorial in the database
      db.apartment_unit.create(apartment_unit)
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
    db.apartment_unit.findAll({attributes: ['apartment_unit_id','project_id']})
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
  
    db.apartment_unit.findByPk(id)
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
  
    db.apartment_unit.update(req.body, {
      where: { apartment_unit_id: id }
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
  
    db.apartment_unit.destroy({
      where: { apartment_unit_id: id }
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

  exports.getAllApartmentUnitDetails = function (req, res, next) {
    const id = req.params.id;
  
    db.sequelize.query(`select apartment_unit.*, tower.*, floor.* from apartment_unit inner join project on
    apartment_unit.project_id= project.project_id
    inner join tower on tower.project_id = project.project_id
    inner join floor on tower.tower_id = floor.tower_id
    where apartment_unit_id=:id`,
    { replacements: {id: id},type: db.sequelize.QueryTypes.SELECT}
  ).then(function(projectApartmentUnitData) {
    res.send(projectApartmentUnitData);
  });
  };

  exports.getAllExistingApartmentUnitDetails = function (req, res, next) {
  
    db.sequelize.query(`select apartment_unit.*, tower.*, floor.* from apartment_unit inner join project on
    apartment_unit.project_id= project.project_id
    inner join tower on tower.project_id = project.project_id
    inner join floor on tower.tower_id = floor.tower_id;`,
    {type: db.sequelize.QueryTypes.SELECT}
  ).then(function(projectApartmentUnitData) {
    res.send(projectApartmentUnitData);
  });
  };