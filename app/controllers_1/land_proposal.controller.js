const db = require("../models");
const LandProposal = db.land_proposal;
const Op = db.Sequelize.Op;

function custom_sort(a, b) {
  return new Date(b.dataItem.dataValues.date_time).getTime() - new Date(a.dataItem.dataValues.date_time).getTime();
}

// Create and Save a new Land
exports.create = function (req, res, next) {
    
      // Create a land
      const landProposal = {
        city: req.body.city,
        zipcode: req.body.zipcode,
        district_name: req.body.district_name,
        customer_id: req.body.customer_id,
        state : req.body.state,
        address  : req.body.address ,
        extend   : req.body.extend  ,
        description : req.body.description,
        proposal : req.body.proposal,
        attachment_path : req.body.attachment_path,
        date_time: req.body.date_time,
        is_read: req.body.is_read
      };
    
      // Save Land in the database
      db.land_proposal.create(landProposal)
        .then(data => {
          res.send(data);
        })
       
  
};

// Retrieve all lands from the database.
exports.findAll = function (request, res, next) {
    db.land_proposal.findAll({attributes: ['land_proposal_id','date_time','customer_id','district_name','city','zipcode','state','state', 'address',
'extend', 'description', 'proposal', 'attachment_path', 'is_read' ]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving Land proposal info."
                });
              });
};

// Find a single land with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.land_proposal.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Land  proposalwith id=" + id
        });
      });
  };

// Update a land by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.land_proposal.update(req.body, {
      where: { land_proposal_id: id }
    })
      .then(num => {
          res.send({
            message: "Land Proposal was updated successfully."
          });
      })
      .catch(err => {
        res.status(500).send({
          message: "Error updating Land with id=" + id
        });
      });
  };
  


// // Delete a Land proposal with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.land_proposal.destroy({
      where: { land_proposal_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "Land proposal was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete Land proposal with id=${id}. Maybe Land was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Land proposal with id=" + id
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


// Find a single land with an id
exports.findLandDataWithCustomerData= function (req, res, next) {
  const id = req.params.id;

  db.land_proposal.findByPk(id)
    .then(data => {
      db.customer_details.findByPk(data.customer_id)
      .then(customerData =>{
        res.send({data,customerData});
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Land with id=" + id
      });
    });
};

exports.findLandProposlDataWithCustomerDataAndDistrictName= function (req, res, next) {
  const id = req.params.id;
  
  db.land_proposal.findByPk(id)
    .then(data => {


    db.customer_details.findByPk(data.customer_id)
    .then(customerData =>{
 
            res.send({data,customerData});
        
    })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Land with url=" + url
      });
    });
};

exports.findAllLandProposlDataWithCustomerDataAndDistrictName= function (req, res, next) {
  var options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric',minute: 'numeric',second: 'numeric'};
  
   db.land_proposal.findAll({attributes: ['land_proposal_id','date_time','customer_id','district_name','city','zipcode','state','state', 'address',
'extend', 'description', 'proposal', 'attachment_path', 'is_read' ]})
    .then( async data => {
      var resArray=[];
      await data.forEach( dataItem => {
        dataItem.date_time = (new Date(dataItem.date_time)).toLocaleDateString("en-US", options)
        db.customer_details.findByPk(dataItem.customer_id)
        .then( customerData =>{
           resArray.push({dataItem,customerData});
        })
      })
      await new Promise(r => setTimeout(r, 2000));
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
    db.land_proposal.findAll({ where: { is_read: 0 } })
      .then(data => {
        const len = data.length;
        //console.log(len);
        res.send({len});
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving unread proposal count."
        });
      });
  };
