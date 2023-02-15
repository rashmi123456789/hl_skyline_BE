const db = require("../models");

// Create and Save a new Amenties
exports.create = function (req, res, next) {
    
      // Create a amnties
      const job = {
        job_id:req.body.id,
        title:req.body.title,
        qualification:req.body.qualification,
        location:req.body.location,
        experience:req.body.experience,
        description:req.body.description
      };
    
      // Save job in the database
      db.job.create(job)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating jobs."
          });
        });
  
};

// Retrieve all jobs from the database.
exports.findAll = function (request, res, next) {
    db.job.findAll({attributes: ['job_id','title','qualification','location','experience','description', 'createdAt']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving job."
                });
              });
};

// Find a single jobs with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
    console.log(id)
    db.job.findAll({where: {job_id: id}})
      .then(data => {
        console.log(data)
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving job with id=" + id
        });
      });
  };

// Update a jobs by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.job.update(req.body, {
      where: { job_id: id }
    })
      .then(
          res.send({
            message: "job was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating job with id=" + id
        });
      });
  };
  
// };

// // Delete a job with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.job.destroy({
      where: { job_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "job was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete job with id=${id}. Maybe job was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete job with id=" + id
        });
      });
  };