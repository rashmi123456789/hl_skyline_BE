const db = require("../models");
const jwt = require("jsonwebtoken");
const User = db.user;
const Op = db.Sequelize.Op;

// Create and Save a new User
exports.create = function (req, res, next) {

  const token = jwt.sign(
    { user_id: req.body.name, email:req.body.email },
    "homeland",
    {
      expiresIn: "2h",
    }
  );
    
      // Create a customer
      const user = {
        name: req.body.name,
        email: req.body.email,
        password: req.body.password,
        token: token
      };
    
      // Save Tutorial in the database
      db.user.create(user)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
            //console.log(err);
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a job."
          });
        });
  
};

// Retrieve all User from the database.
exports.findAll = function (request, res, next) {
    db.user.findAll({attributes: ['user_id', 'name','email','password','token']})
    .then(async data =>{
        await res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving job."
                });
              });
};

// Find a single User with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.user.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving User with id=" + id
        });
      });
  };

// Update a User by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.user.update(req.body, {
      where: { user_id: id }
    })
      .then(
          res.send({
            message: "User was updated successfully."
          })
        )
      .catch(err => {
        res.status(500).send({
          message: "Error updating User with id=" + id
        });
      });
  };
  
// };

// // Delete a User with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.user.destroy({
      where: { user_id: id }
    })
      .then(
          res.send({
            message: "User was deleted successfully!"
          })
          )
      .catch(err => {
        res.status(500).send({
          message: "Could not delete User with id=" + id
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
exports.login=  function (req, res, next) {
    db.user.findOne({ where: { email: req.body.email, password: req.body.password } })
      .then(async data =>{
          if (data!==null){

            const token = jwt.sign(
              { user_id: data.name, email:data.email },
              "homeland",
              {
                expiresIn: "2h",
              }
            );
      
            // save user token
            data.token = token;
        await res.status(200).send(data);
          }else {
            res.status(403).send({
                message:
                   "Some error occurred while logging in"
              });
          }
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while logging in"
                });
              });
  };