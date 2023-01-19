const db = require("../models");
const District = db.districts;
const Op = db.Sequelize.Op;

// Create and Save a new Customer
exports.create = function (req, res, next) {
    
      // Create a district
      const district = {
        name: req.body.name,
        province: req.body.province,
        intro_title:req.body.intro_title,
        intro : req.body.intro,
        image_path_1 : req.body.image_path_1,
        image_path_2 : req.body.image_path_2,
        image_path_3 : req.body.image_path_3,
        button_url: req.body.button_url,
        district_url : req.body.district_url,
        amenties_id: req.body.amenties_id,
        meta_data: req.body.meta_data ,
        faq_1:req.body.faq_1,
        faq_2:req.body.faq_2,
        faq_3:req.body.faq_3,
        faq_4:req.body.faq_4,
        faq_ans_1:req.body.faq_ans_1,
        faq_ans_2:req.body.faq_ans_2,
        faq_ans_3:req.body.faq_ans_3,
        faq_ans_4:req.body.faq_ans_4,


      };
    
      // Save district in the database
      db.districts.create(district)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating a district."
          });
        });
  
};

// Retrieve all districts from the database.
exports.findAll = function (request, res, next) {
    db.districts.findAll({attributes: [ 'district_id','name','province','intro_title','intro','image_path_1','image_path_2','image_path_3','button_url','district_url','meta_data',
    'amenties_id','faq_1','faq_2','faq_3','faq_4','faq_ans_1','faq_ans_2','faq_ans_3','faq_ans_4']})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving districts."
                });
              });
};

// Find a single district with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.districts.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving district with id=" + id
        });
      });
  };

// Update a District by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.districts.update(req.body, {
      where: { district_id: id }
    })
      .then(num => {
        
          res.send({
            message: "district was updated successfully."
          })
        })
     
  };
  
// };

// // Delete a District with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.districts.destroy({
      where: { district_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "District was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete District with id=${id}. Maybe District was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete District with id=" + id
        });
      });
  };

// Find all users with given district name
exports.findAllWithGivenName=  function (req, res, next) {
    db.districts.findOne({ where: { name: req.body.name } })
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving district."
        });
      });
  };

  exports.findDistrictDataWithAmentiesDatawhenDistrictUrlGiven= function (req, res, next) {
    const url = req.params.url;
    db.districts.findOne({ where: { district_url: url } })
      .then(data => {
        db.amenties.findByPk(data.amenties_id)
        .then(amentiesData =>{
          res.send({data,amentiesData});
        })
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving District with url=" + url
        });
      });
  };

  exports.findAllWithDistrictNameLandCountAndImage = function (request, res, next) {
    db.sequelize.query(`select land.district_id,count(*) as count, districts.name, districts.image_path_1
    from land inner join districts on land.district_id = districts.district_id group by land.district_id ;`,
    { replacements: {districtName: request.body.district_name},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(landData) {
    res.send(landData)
  })
   
  };

  exports.findAllLandsInADistrict = function (request, res, next) {
    db.sequelize.query(`select land.land_id, land.name, land.price,land.total_blocks, land.available_blocks,land.land_description, land.city_name, land.status, land.image_path_1, land.image_path_2, land.image_path_3, land.description, 
    land.province,land.extent,land.water,land.electricity,land.school,land.hospital,land.amenties_id,land.button_url,land.project_plan_image_path,land.project_plan_intro,land.location_lan,land.location_lat,land.project_url,land.meta_data,land.map_description_1,land.map_description_2 ,
    land.faq_1, land.faq_2,land.faq_3,land.faq_4,land.faq_ans_1,land.faq_ans_2,land.faq_ans_3,land.faq_ans_4
    from land inner join districts on land.district_id = districts.district_id where districts.name=:district_name order by land_id desc;`,
    { replacements: {district_name: request.body.district_name},type: db.sequelize.QueryTypes.SELECT }
  ).then(function(landData) {
    res.send(landData)
  })
   
  };

  exports.findAllDistrictUrls = function (request, res, next) {
    db.sequelize.query('select district_url from districts', {type: db.sequelize.QueryTypes.SELECT }
  ).then(function(district_urls) {
    res.send(district_urls)
  })
   
  };
  
  
  