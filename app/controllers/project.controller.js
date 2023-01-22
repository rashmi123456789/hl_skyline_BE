const db = require("../models");

// Create and Save a new project
exports.create = function (req, res, next) {
    
      // Create a project
      const project = {
        project_id:req.body.project_id,
        district: req.body.district,
        matter_port: req.body.matter_port,
        type: req.body.type,
        name: req.body.name,
        slider_1_img:req.body.slider_1_img,
        slider_1_atl: req.body.slider_1_atl,
        slider_2_img: req.body.slider_2_img,
        slider_2_atl:req.body.slider_2_atl,
        slider_3_img: req.body.slider_3_img,
        slider_3_atl:req.body.slider_3_atl,
        slider_4_img: req.body.slider_4_img,
        slider_4_atl:req.body.slider_4_atl,
        facility_label: req.body.facility_label,
        facility_title:req.body.facility_title,
        facility_description: req.body.facility_description,
        facility_1: req.body.facility_1,
        icon_1: req.body.icon_1,
        facility_2: req.body.facility_2,
        icon_2: req.body.icon_2,
        facility_3: req.body.facility_3,
        icon_3: req.body.icon_3,
        facility_4:req.body.facility_4,
        icon_4: req.body.icon_4,
        facility_5:req.body.facility_5,
        icon_5: req.body.icon_5,
        facility_6: req.body.facility_6,
        icon_6: req.body.icon_6,
        project_details_label:req.body. project_details_label,
        project_details_title:req.body.project_details_title,
        project_details_location:req.body.project_details_location,
        project_details_number_of_bedrooms:req.body.project_details_number_of_bedrooms,
        project_details_number_of_floors: req.body.project_details_number_of_floors,
        project_details_property_type: req.body.project_details_property_type,
        project_details_number_of_units: req.body.project_details_number_of_units,
        project_details_car_park_spaces: req.body.project_details_car_park_spaces,
        project_details_architect: req.body.project_details_architect,
        project_details_developer: req.body.project_details_developer,
        video_url: req.body.video_url,
        design_label:req.body.design_label,
        design_title: req.body.design_title,
        design_description_1: req.body.design_description_1,
        design_image_1: req.body.design_image_1,
        design_image_1_alt: req.body.design_image_1_alt,
        design_image_1_title:req.body.design_image_1_title,
        design_description_2: req.body.design_description_2,
        design_image_2: req.body.design_image_2,
        design_image_2_alt: req.body.design_image_2_alt,
        design_image_2_title: req.body.design_image_2_title,
        design_image_horizontal: req.body.design_image_horizontal,
        design_image_horizontal_alt:req.body.design_image_horizontal_alt,
        design_image_horizontal_title: req.body.design_image_horizontal_title,
        project_plan_label: req.body.project_plan_label,
        project_plan_title: req.body.project_plan_title,
        project_plan_description: req.body.project_plan_description,
        project_plan_image: req.body.project_plan_image,
        project_plan_alt: req.body.project_plan_alt,
        faq_label: req.body.faq_label,
        faq_title: req.body.faq_title,
        faq_description:req.body.faq_description
      };
    
      // Save project in the database
      db.project.create(project)
        .then(data => {
          res.send(data);
        })
        .catch(err => {
          res.status(500).send({
            message:
              err.message || "Some error occurred while creating project."
          });
        });
  
};

// Retrieve all project from the database.
exports.findAll = function (request, res, next) {
    db.project.findAll({
        attributes: [
            'project_id',
            'district',
            'matter_port', 
            'type',
            'name' ,
            'slider_1_img',
            'slider_1_atl' ,
            'slider_2_img' ,
            'slider_2_atl',
            'slider_3_img' ,
            'slider_3_atl',
            'slider_4_img' ,
            'slider_4_atl',
            'facility_label',
            'facility_title',
            'facility_description', 
            'facility_1',
            'icon_1' ,
            'facility_2',
            'icon_2' ,
            'facility_3', 
            'icon_3' ,
            'facility_4',
            'icon_4' ,
            'facility_5',
            'icon_5' ,
            'facility_6', 
            'icon_6' ,
            'project_details_label', 
            'project_details_title',
            'project_details_location',
            'project_details_number_of_bedrooms', 
            'project_details_number_of_floors',
            'project_details_property_type' ,
            'project_details_number_of_units', 
            'project_details_car_park_spaces' ,
            'project_details_architect' ,
            'project_details_developer' ,
            'video_url',
            'design_label',
            'design_title' ,
            'design_description_1', 
            'design_image_1' ,
            'design_image_1_alt', 
            'design_image_1_title',
            'design_description_2' ,
            'design_image_2' ,
            'design_image_2_alt', 
            'design_image_2_title', 
            'design_image_horizontal', 
            'design_image_horizontal_alt',
            'design_image_horizontal_title', 
            'project_plan_label' ,
            'project_plan_title' ,
            'project_plan_description', 
            'project_plan_image', 
            'project_plan_alt', 
            'faq_label',
            'faq_title' ,
            'faq_description'
        ]})
    .then(data => {
                res.send(data);
              })
              .catch(err => {
                res.status(500).send({
                  message:
                    err.message || "Some error occurred while retrieving project."
                });
              });
};

// Find a single project with an id
exports.findOne = function (req, res, next) {
    const id = req.params.id;
  
    db.project.findByPk(id)
      .then(data => {
        res.send(data);
      })
      .catch(err => {
        res.status(500).send({
          message: "Error retrieving project with id=" + id
        });
      });
  };

// Update a project by the id in the request
exports.update = function (req, res, next) {
    const id = req.params.id;
  
    db.project.update(req.body, {
      where: { project_id: id }
    })
      .then(
          res.send({
            message: "project was updated successfully."
          })
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating project with id=" + id
        });
      });
  };
  
// };

// // Delete a project with the specified id in the request
exports.delete = function (req, res, next) {
    const id = req.params.id;
  
    db.project.destroy({
      where: { project_id: id }
    })
      .then(num => {
        if (num == 1) {
          res.send({
            message: "project was deleted successfully!"
          });
        } else {
          res.send({
            message: `Cannot delete project with id=${id}. Maybe unit was not found!`
          });
        }
      })
      .catch(err => {
        res.status(500).send({
          message: "Could not delete project with id=" + id
        });
      });
  };