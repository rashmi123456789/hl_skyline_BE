const db = require("../models");
const UserMessage = db.user_message;
const Op = db.Sequelize.Op;

function custom_sort(a, b) {
  return new Date(b.dataItem.dataValues.date_time).getTime() - new Date(a.dataItem.dataValues.date_time).getTime();
}

// Create and Save a new message
exports.create = function (req, res, next) {
    
      // Create a message
      const userMessage = {
        subject: req.body.subject,
        message: req.body.message,
        customer_id: req.body.customer_id,
        date_time: req.body.date_time,
        is_read: req.body.is_read,
        project: req.body.project
      };
    
      // Save user essage in the database
      db.user_message.create(userMessage)
        .then(data => {
          res.send(data);
        })
       
  
};

// Retrieve all messages from the database.
exports.findAll = function (request, res, next) {
    db.user_message.findAll({attributes: ['message_id','date_time','customer_id','subject','message','is_read','project' ]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving message info."
                });
              });
};

// Find a single message with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.user_message.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving user message with id=" + id
        });
      });
  };

// Update a message by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.user_message.update(req.body, {
      where: { message_id: id }
    })
      .then(num => {
          res.send({
            message: "Message was updated successfully."
          });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating message with id=" + id
        });
      });
  };
  


// // Delete a message with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.user_message.destroy({
      where: { message_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "user message was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete user  message with id=${id}. Maybe message was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete message with id=" + id
        });
      });
  };

// // Find all lands with given district id
// exports.findAllWithGivenDistrictId=  function (req, res, next) {
//     db.land.findAll({ where: { district_id: req.body.district_id } })
//       .then(data => {
//         res.send(data);
//       })
//       .catch(err => {
//         res.status(500).send({
//           message:
//             err.message || "Some error occurred while retrieving land info."
//         });
//       });
//   };


// Find a single message with an id
exports.findMessageDataWithCustomerData= function (req, res, next) {
  const id = req.params.id;

  db.user_message.findByPk(id)
    .then(data => {
      db.customer_details.findByPk(data.customer_id)
      .then(customerData =>{
        res.send({data,customerData});
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving message with id=" + id
      });
    });
};

exports.findMessageDataWithCustomerData= function (req, res, next) {
  const id = req.params.id;
  
  db.user_message.findByPk(id)
    .then(data => {


    db.customer_details.findByPk(data.customer_id)
    .then(customerData =>{
 
            res.send({data,customerData});
        
    })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving message"
      });
    });
};

exports.findAllMesagesDataWithCustomerData= function (req, res, next) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'};
  
   db.user_message.findAll({attributes: ['message_id','date_time','customer_id','subject','message','is_read','project' ]})
    .then( async data => {
      var resArray=[];
      await data.forEach( dataItem => {
        dataItem.date_time = (new Date(dataItem.date_time)).toLocaleDateString("en-US", options)
        db.customer_details.findByPk(dataItem.customer_id)
        .then( customerData =>{
           resArray.push({dataItem,customerData});
        })
      })
      await new Promise(r => setTimeout(r, 3000));
      await res.send(resArray.sort(custom_sort));
    })
    .catch(err => {
      res.status(500).send({
        message: err
      });
    });
};

// Find all new proposal count
exports.findANewMessageCount=  function (req, res, next) {
    db.user_message.findAll({ where: { is_read: 0 } })
      .then(data => {
        const len = data.length;
        //console.log(len);
        res.send({len});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving unread message count."
        });
      });
  };