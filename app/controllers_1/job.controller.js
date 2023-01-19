const db = require("../models");
const Job = db.job;
const Op = db.Sequelize.Op;

// Create and Save a new Job
exports.create = function (req, res, next) {
    
      // Create a customer
      const job = {
        title: req.body.title,
        education: req.body.education,
        location: req.body.location,
        experience: req.body.experience,
        description: req.body.description,
        main_description: req.body.main_description
      };
    
      // Save Tutorial in the database
      db.job.create(job)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a job."
          });
        });
  
};

// Retrieve all Job from the database.
exports.findAll = function (request, res, next) {
    db.job.findAll({attributes: ['job_id', 'title','education','location','experience','description','main_description']})
    .then(async data =>{
        await data.forEach(dataItem => {
            dataItem.description = new Buffer( dataItem.description).toString('utf-8');
        });
        await res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving job."
                });
              });
};

// Find a single Job with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.job.findByPk(id)
      .then(data => {
        data.description = new Buffer( data.description ).toString('utf-8');
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Job with id=" + id
        });
      });
  };

// Update a Job by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.job.update(req.body, {
      where: { job_id: id }
    })
      .then(
          res.send({
            message: "Job was updated successfully."
          })
        )
      .catch(err => {
        res.status(500).send({
          message: "Error updating Job with id=" + id
        });
      });
  };
  
// };

// // Delete a Job with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.job.destroy({
      where: { job_id: id }
    })
      .then(
          res.send({
            message: "Job was deleted successfully!"
          })
          )
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Job with id=" + id
        });
      });
  };

// // Find posts with given job post url 
// exports.findAllWithGiveUrl=  function (req, res, next) {
//     db.job.findOne({ where: { blog_post_url: req.body.blog_post_url } })
//       .then(data => {
//         data.editor_text = new Buffer( data.editor_text ).toString('utf-8');
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving blogs."
//         });
//       });
//   };


//   // Find posts with given job post status
// exports.findAllWithGivenStatus=  function (req, res, next) {
//     db.job.findAll({ where: { status: req.body.status } })
//       .then(async data =>{
//         await data.forEach(dataItem => {
//             dataItem.editor_text = new Buffer( dataItem.editor_text).toString('utf-8');
//         });
//         await res.send(data);
//               })
//               .catch(err => {
//                 res.status(500).send({
//                   message:
//                     err.message || "Some error occurred while retrieving job."
//                 });
//               });
//   };