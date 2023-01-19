const db = require("../models");
const Land = db.land;
const Op = db.Sequelize.Op;

// Create and Save a new Land
exports.create = function (req, res, next) {
    if (!req.body.name) {
        res.status(400).send({
          message: "Land name can not be empty!"
        });
        return;
      }
      if (!req.body.district_id) {
        res.status(400).send({
          message: "District Id can not be empty!"
        });
        return;
      }
    
      // Create a land
      const land = {
        name: req.body.name,
        price: req.body.price,
        district_id: req.body.district_id,
        total_blocks : req.body.total_blocks,
        city_name  : req.body.city_name ,
        status   : req.body.status  ,
        image_path_1 : req.body.image_path_1,
        image_path_2 : req.body.image_path_2,
        image_path_3 : req.body.image_path_3,
        available_blocks: req.body.available_blocks,
        land_description: req.body.land_description,
        description  : req.body.description ,
        map_description_1: req.body.map_description_1,
        map_description_2: req.body.map_description_2,
        province    : req.body. province   ,
        extent  : req.body.extent ,
        water  : req.body.water == 1 ? 1 : 0 ,
        carpet_road: req.body.carpet_road == 1 ? 1 : 0 ,
        bus_route: req.body.bus_route == 1 ? 1 : 0 ,
        paddy_view: req.body.paddy_view == 1 ? 1 : 0 ,
        private_schools: req.body.private_schools == 1 ? 1 : 0 ,
        main_road: req.body.main_road == 1 ? 1 : 0 ,
        electricity   : req.body.electricity == 1 ? 1 : 0 ,
        school   : req.body.school == 1 ? 1 : 0   ,
        hospital    : req.body.hospital== 1 ? 1 : 0     ,
        amenties_id  : req.body.amenties_id ,
        button_url  : req.body.button_url ,
        project_plan_image_path : req.body.project_plan_image_path,
        project_plan_intro  : req.body.project_plan_intro ,
        location_lan  : req.body.location_lan ,
        location_lat   : req.body.location_lat  ,
        project_url    : req.body.project_url   ,
        meta_data  :req.body.meta_data,

        faq_1:req.body.faq_1,
        faq_2:req.body.faq_2,
        faq_3:req.body.faq_3,
        faq_4:req.body.faq_4,
        faq_ans_1:req.body.faq_ans_1,
        faq_ans_2:req.body.faq_ans_2,
        faq_ans_3:req.body.faq_ans_3,
        faq_ans_4:req.body.faq_ans_4,

      };
    
      // Save Land in the database
      db.land.create(land)
        .then(data => {
          res.send(data);
        })
       
  
};

// Retrieve all lands from the database.
exports.findAll = function (request, res, next) {
    db.land.findAll({attributes: ['land_id', 'name','price','district_id','total_blocks','available_blocks','land_description', 'city_name',
'status', 'image_path_1', 'image_path_2', 'image_path_3', 'description', 'province', 'extent', 'water', 'electricity',
 'school', 'hospital', 'amenties_id', 'button_url','project_plan_image_path', 'project_plan_intro', 'location_lan',
'location_lat', 'project_url', 'meta_data','map_description_1','map_description_2' ,'faq_1','faq_2','faq_3','faq_4','faq_ans_1','faq_ans_2','faq_ans_3','faq_ans_4'],order:[['land_id','DESC']]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving Land info."
                });
              });
};

// Find a single land with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.land.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving Land with id=" + id
        });
      });
  };

// Update a land by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.land.update(req.body, {
      where: { land_id: id }
    })
      .then(
          res.send({
            message: "Land was updated successfully."
          })
          )
      .catch(err => {
        res.status(500).send({
          message: "Error updating Land with id=" + id
        });
      });
  };
  


// // Delete a Land with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.land.destroy({
      where: { land_id: id }
    })
      .then(num => {
        
          res.send({
            message: `Cannot delete Land with id=${id}. Maybe Land was not found!`
          });
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete Land with id=" + id
        });
      });
  };

// Find all lands with given district id
exports.findAllWithGivenDistrictId=  function (req, res, next) {
    db.land.findAll({ where: { district_id: req.body.district_id }, order:[['land_id','DESC']]})
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while retrieving land info."
        });
      });
  };


// Find a single land with an id
exports.findLandDataWithAmentiesData= function (req, res, next) {
  const id = req.params.id;

  db.land.findByPk(id)
    .then(data => {
      db.amenties.findByPk(data.amenties_id)
      .then(amentiesData =>{
        res.send({data,amentiesData});
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Land with id=" + id
      });
    });
};

exports.findLandDataWithAmentiesDatawhenProjectUrlGiven= function (req, res, next) {
  const url = req.params.url;
  db.land.findOne({ where: { project_url: url } })
    .then(data => {
      db.amenties.findByPk(data.amenties_id)
      .then(amentiesData =>{
        res.send({data,amentiesData});
      })
    })
    .catch(err => {
      res.status(500).send({
        message: "Error retrieving Land with url=" + url
      });
    });
};


exports.findAllWithDistrictName = function (request, res, next) {
  db.sequelize.query(`SELECT land.land_id, land.name, land.price,land.total_blocks, land.available_blocks,land.land_description, land.city_name, land.status, land.image_path_1, land.image_path_2, land.image_path_3, land.description, 
  land.province,land.extent,land.water,land.electricity,land.school,land.hospital,land.amenties_id,land.button_url,land.project_plan_image_path,land.project_plan_intro,land.location_lan,land.location_lat,land.project_url,land.meta_data,land.map_description_1,land.map_description_2,
  land.faq_1, land.faq_2,land.faq_3,land.faq_4,land.faq_ans_1,land.faq_ans_2,land.faq_ans_3,land.faq_ans_4, districts.name as district_name FROM land INNER JOIN districts ON land.district_id = districts.district_id ORDER BY land.land_id desc; `,
  { type: db.sequelize.QueryTypes.SELECT }
).then(function(landData) {
  res.send(landData)
})
};

exports.findAllWithDistrictAndCityName = function (request, res, next) {
  db.sequelize.query(`SELECT land.land_id, land.name, land.price,land.total_blocks, land.available_blocks,land.land_description, land.city_name, land.status, land.image_path_1, land.image_path_2, land.image_path_3, land.description, 
  land.province,land.extent,land.water,land.electricity,land.school,land.hospital,land.amenties_id,land.button_url,land.project_plan_image_path,land.project_plan_intro,land.location_lan,land.location_lat,land.project_url,land.meta_data,land.map_description_1,land.map_description_2 ,
  land.faq_1, land.faq_2,land.faq_3,land.faq_4,land.faq_ans_1,land.faq_ans_2,land.faq_ans_3,land.faq_ans_4, districts.name as district_name FROM land INNER JOIN districts ON land.district_id = districts.district_id
  where districts.name= :districtName and land.city_name = :city; `,
  { replacements: {districtName: request.body.district_name, city: request.body.city},type: db.sequelize.QueryTypes.SELECT }
).then(function(landData) {
  res.send(landData)
})
};

exports.findAllWithCitiesForGivenDistrict = function (request, res, next) {
  db.sequelize.query(`SELECT Distinct land.city_name ,districts.name as district_name FROM land INNER JOIN districts ON land.district_id = districts.district_id
  where districts.name= :districtName; `,
  { replacements: {districtName: request.body.district_name},type: db.sequelize.QueryTypes.SELECT }
).then(function(landData) {
  res.send(landData)
})
 
};

exports.findAllProjectUrls = function (request, res, next) {
  db.sequelize.query('select project_url from land', {type: db.sequelize.QueryTypes.SELECT }
).then(function(project_urls) {
  res.send(project_urls)
})
 
};

