const db = require("../models");
const projectController = require('../controllers/project.controller.js');

exports.create = async function (req, res, next) {
    
    // Create a project

    const pd = req.body.project_details;
    const project_detail_json = {
      project_id:pd.project_id,
      district: pd.district,
      matter_port: pd.matter_port,
      type: pd.type,
      name: pd.name,
      slider_1_img:pd.slider_1_img,
      slider_1_atl: pd.slider_1_atl,
      slider_2_img: pd.slider_2_img,
      slider_2_atl:pd.slider_2_atl,
      slider_3_img: pd.slider_3_img,
      slider_3_atl:pd.slider_3_atl,
      slider_4_img: pd.slider_4_img,
      slider_4_atl:pd.slider_4_atl,
      facility_label: pd.facility_label,
      facility_title:pd.facility_title,
      facility_description: pd.facility_description,
      facility_1: pd.facility_1,
      icon_1:pd.icon_1,
      facility_2: pd.facility_2,
      icon_2: pd.icon_2,
      facility_3: pd.facility_3,
      icon_3: pd.icon_3,
      facility_4:pd.facility_4,
      icon_4: pd.icon_4,
      facility_5:pd.facility_5,
      icon_5: pd.icon_5,
      facility_6: pd.facility_6,
      icon_6: pd.icon_6,
      project_details_label:pd.project_details_label,
      project_details_title:pd.project_details_title,
      project_details_location:pd.project_details_location,
      project_details_number_of_bedrooms:pd.project_details_number_of_bedrooms,
      project_details_number_of_floors: pd.project_details_number_of_floors,
      project_details_property_type: pd.project_details_property_type,
      project_details_number_of_units: pd.project_details_number_of_units,
      project_details_car_park_spaces: pd.project_details_car_park_spaces,
      project_details_architect: pd.project_details_architect,
      project_details_developer: pd.project_details_developer,
      video_url: pd.video_url,
      design_label:pd.design_label,
      design_title: pd.design_title,
      design_description_1: pd.design_description_1,
      design_image_1: pd.design_image_1,
      design_image_1_alt: pd.design_image_1_alt,
      design_image_1_title:pd.design_image_1_title,
      design_description_2: pd.design_description_2,
      design_image_2: pd.design_image_2,
      design_image_2_alt:pd.design_image_2_alt,
      design_image_2_title: pd.design_image_2_title,
      design_image_horizontal: pd.design_image_horizontal,
      design_image_horizontal_alt:pd.design_image_horizontal_alt,
      design_image_horizontal_title: pd.design_image_horizontal_title,
      project_plan_label: pd.project_plan_label,
      project_plan_title: pd.project_plan_title,
      project_plan_description: pd.project_plan_description,
      project_plan_image: pd.project_plan_image,
      project_plan_alt: pd.project_plan_alt,
      faq_label: pd.faq_label,
      faq_title: pd.faq_title,
      faq_description:pd.faq_description,
      status: pd.status
    };

    const ameneties_json = {
        ameneties_id:pd.ameneties_id,
        project_id:'',
        ameneties_label:pd.ameneties_label,
        ameneties_title:pd.ameneties_title,
        ameneties_details_image:pd.ameneties_details_image,
        ameneties_details_image_alt:pd.ameneties_details_image_alt,
        ameneties_details_description:pd.ameneties_details_description,
        ameneties_image_1:pd.ameneties_image_1,
        ameneties_image_1_alt:pd.ameneties_image_1_alt,
        ameneties_image_1_title:pd.ameneties_image_1_title,
        ameneties_image_1_description:pd.ameneties_image_1_description,
        ameneties_image_2:pd.ameneties_image_2,
        ameneties_image_2_alt:pd.ameneties_image_2_alt,
        ameneties_image_2_title:pd.ameneties_image_2_title,
        ameneties_image_2_description:pd.ameneties_image_2_description,
        ameneties_image_horizontal:pd.ameneties_image_horizontal,
        ameneties_image_horizontal_alt:pd.ameneties_image_horizontal_alt,
        ameneties_image_horizontal_title:pd.ameneties_image_horizontal_title,
        ameneties_image_vertical:pd.ameneties_image_vertical,
        ameneties_image_vertical_alt:pd.ameneties_image_vertical_alt,
        ameneties_image_vertical_title:pd.ameneties_image_vertical_title,
      };

      const architectures_json = {
        architecture_id:pd.architecture_id,
        project_id:'',
        architecture_label:pd.architecture_label,
        architecture_title:pd.architecture_title,
        architecture_description_1:pd.architecture_description_1,
        architecture_image_1:pd.architecture_image_1,
        architecture_image_1_alt:pd.architecture_image_1_alt,
        architecture_image_1_title:pd.architecture_image_1_title,
        architecture_image_2:pd.architecture_image_2,
        architecture_image_2_alt:pd.architecture_image_2_alt,
        architecture_image_2_title:pd.architecture_image_2_title,
        architecture_description_2:pd.architecture_description_2,
        architecture_image_horizontal:pd.architecture_image_horizontal,
        architecture_image_horizontal_alt:pd.architecture_image_horizontal_alt,
        architecture_image_horizontal_title:pd.architecture_image_horizontal_title
      };

      const locations_json = {
        location_id:pd.location_id,
        project_id:'',
        location_label:pd.location_label,
        location_title:pd.location_title,
        location_description:pd.location_description,
        location_g_map_location:pd.location_g_map_location,
        location_amenity_1:pd.location_amenity_1,
        location_amenity_1_details:pd.location_amenity_1_details,
        location_amenity_2:pd.location_amenity_2,
        location_amenity_2_details:pd.location_amenity_2_details,
        location_amenity_3:pd.location_amenity_3,
        location_amenity_3_details:pd.location_amenity_3_details,
        location_amenity_4:pd.location_amenity_4,
        location_amenity_4_details:pd.location_amenity_4_details
      };

      const property_json = {
        property_id:pd.property_id,
        project_id: '',
        property_label: pd.property_label,
        property_title:pd.property_title,
        property_image: pd.property_image,
        property_image_alt:pd.property_image_alt,
        property_brochure:pd.property_brochure,
        property_brochure_alt:pd.property_brochure_alt,
        property_description: pd.property_description,
        property_spec_label:pd.property_spec_label,
        property_spec_title:pd.property_spec_title,
        property_spec_details_spec_1_title:pd.property_spec_details_spec_1_title,
        property_spec_details_spec_1_details: pd.property_spec_details_spec_1_details,
        property_spec_details_spec_2_title:pd.property_spec_details_spec_2_title,
        property_spec_details_spec_2_details:pd.property_spec_details_spec_2_details,
        property_spec_details_spec_3_title: pd.property_spec_details_spec_3_title,
        property_spec_details_spec_3_details: pd.property_spec_details_spec_3_details,
        property_spec_details_spec_4_title:pd.property_spec_details_spec_4_title,
        property_spec_details_spec_4_details:pd.property_spec_details_spec_4_details,
        property_spec_slider_image_1:pd.property_spec_slider_image_1,
        property_spec_slider_image_1_alt: pd.property_spec_slider_image_1_alt,
        property_spec_slider_image_2: pd.property_spec_slider_image_2,
        property_spec_slider_image_2_alt:pd.property_spec_slider_image_2_alt,
        property_spec_slider_image_3: pd.property_spec_slider_image_3,
        property_spec_slider_image_3_alt:pd.property_spec_slider_image_3_alt,
        property_spec_slider_image_4: pd.property_spec_slider_image_4,
        property_spec_slider_image_4_alt:pd.property_spec_slider_image_4_alt
      };

      const seo_json = {
        seo_id:pd.seo_id,
        project_id:'',
        url:pd.url,
        meta:pd.meta
      };

      let project_id = '';
      let result = {}
    

    // Save project in the database
    
    await db.project.create(project_detail_json)
      .then(data => {
        project_id = data.project_id;

        ameneties_json.project_id = project_id;
        architectures_json.project_id = project_id;
        locations_json.project_id = project_id;
        property_json.project_id = project_id;
        seo_json.project_id= project_id;

        result.project_details = data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating project."
        });
      });

      await db.ameneties.create(ameneties_json)
      .then(data => {
        result.ameneties = data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating ameneties."
        });
      });

      await db.architecture.create(architectures_json)
      .then(data => {
        result.architectures = data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating architectures."
        });
      });


      await db.seo.create(seo_json)
      .then(data => {
        result.seo = data;
      });


      result.faqs = [];
      await req.body.faq_details.forEach(faq => {

        faq.project_id = project_id;
        db.faq.create(faq)
            .then(data => {
                result.faqs.push(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating faqs."
            });
        });
        
    });

    result.project_unit = [];

    await req.body.project_units.forEach(project_unit => {

        project_unit.project_id = project_id;
        db.project_unit.create(project_unit)
            .then(data => {
                result.project_unit.push(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating project_units."
            });
        });
        
    });

    await db.location.create(locations_json)
      .then(data => {
        result.locations = data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating location."
        });
      });

      await db.property.create(property_json)
      .then(data => {
        result.property = data;
      })
      .catch(err => {
        res.status(500).send({
          message:
            err.message || "Some error occurred while creating property."
        });
      });


      res.send(result);
};


exports.update = async function (req, res, next) {
    
    // Create a project

    const pd = req.body.project_details;
    const project_detail_json = {
      project_id: pd.project_id,
      district: pd.district,
      matter_port: pd.matter_port,
      type: pd.type,
      name: pd.name,
      slider_1_img:pd.slider_1_img,
      slider_1_atl: pd.slider_1_atl,
      slider_2_img: pd.slider_2_img,
      slider_2_atl:pd.slider_2_atl,
      slider_3_img: pd.slider_3_img,
      slider_3_atl:pd.slider_3_atl,
      slider_4_img: pd.slider_4_img,
      slider_4_atl:pd.slider_4_atl,
      facility_label: pd.facility_label,
      facility_title:pd.facility_title,
      facility_description: pd.facility_description,
      facility_1: pd.facility_1,
      icon_1:pd.icon_1,
      facility_2: pd.facility_2,
      icon_2: pd.icon_2,
      facility_3: pd.facility_3,
      icon_3: pd.icon_3,
      facility_4:pd.facility_4,
      icon_4: pd.icon_4,
      facility_5:pd.facility_5,
      icon_5: pd.icon_5,
      facility_6: pd.facility_6,
      icon_6: pd.icon_6,
      project_details_label:pd.project_details_label,
      project_details_title:pd.project_details_title,
      project_details_location:pd.project_details_location,
      project_details_number_of_bedrooms:pd.project_details_number_of_bedrooms,
      project_details_number_of_floors: pd.project_details_number_of_floors,
      project_details_property_type: pd.project_details_property_type,
      project_details_number_of_units: pd.project_details_number_of_units,
      project_details_car_park_spaces: pd.project_details_car_park_spaces,
      project_details_architect: pd.project_details_architect,
      project_details_developer: pd.project_details_developer,
      video_url: pd.video_url,
      design_label:pd.design_label,
      design_title: pd.design_title,
      design_description_1: pd.design_description_1,
      design_image_1: pd.design_image_1,
      design_image_1_alt: pd.design_image_1_alt,
      design_image_1_title:pd.design_image_1_title,
      design_description_2: pd.design_description_2,
      design_image_2: pd.design_image_2,
      design_image_2_alt:pd.design_image_2_alt,
      design_image_2_title: pd.design_image_2_title,
      design_image_horizontal: pd.design_image_horizontal,
      design_image_horizontal_alt:pd.design_image_horizontal_alt,
      design_image_horizontal_title: pd.design_image_horizontal_title,
      project_plan_label: pd.project_plan_label,
      project_plan_title: pd.project_plan_title,
      project_plan_description: pd.project_plan_description,
      project_plan_image: pd.project_plan_image,
      project_plan_alt: pd.project_plan_alt,
      faq_label: pd.faq_label,
      faq_title: pd.faq_title,
      faq_description:pd.faq_description,
      status: pd.status
    };

    const ameneties_json = {
        project_id:'',
        ameneties_label:pd.ameneties_label,
        ameneties_title:pd.ameneties_title,
        ameneties_details_image:pd.ameneties_details_image,
        ameneties_details_image_alt:pd.ameneties_details_image_alt,
        ameneties_details_description:pd.ameneties_details_description,
        ameneties_image_1:pd.ameneties_image_1,
        ameneties_image_1_alt:pd.ameneties_image_1_alt,
        ameneties_image_1_title:pd.ameneties_image_1_title,
        ameneties_image_1_description:pd.ameneties_image_1_description,
        ameneties_image_2:pd.ameneties_image_2,
        ameneties_image_2_alt:pd.ameneties_image_2_alt,
        ameneties_image_2_title:pd.ameneties_image_2_title,
        ameneties_image_2_description:pd.ameneties_image_2_description,
        ameneties_image_horizontal:pd.ameneties_image_horizontal,
        ameneties_image_horizontal_alt:pd.ameneties_image_horizontal_alt,
        ameneties_image_horizontal_title:pd.ameneties_image_horizontal_title,
        ameneties_image_vertical:pd.ameneties_image_vertical,
        ameneties_image_vertical_alt:pd.ameneties_image_vertical_alt,
        ameneties_image_vertical_title:pd.ameneties_image_vertical_title,
      };

      const architectures_json = {
        project_id:'',
        architecture_label:pd.architecture_label,
        architecture_title:pd.architecture_title,
        architecture_description_1:pd.architecture_description_1,
        architecture_image_1:pd.architecture_image_1,
        architecture_image_1_alt:pd.architecture_image_1_alt,
        architecture_image_1_title:pd.architecture_image_1_title,
        architecture_image_2:pd.architecture_image_2,
        architecture_image_2_alt:pd.architecture_image_2_alt,
        architecture_image_2_title:pd.architecture_image_2_title,
        architecture_description_2:pd.architecture_description_2,
        architecture_image_horizontal:pd.architecture_image_horizontal,
        architecture_image_horizontal_alt:pd.architecture_image_horizontal_alt,
        architecture_image_horizontal_title:pd.architecture_image_horizontal_title
      };

      const locations_json = {
        project_id:'',
        location_label:pd.location_label,
        location_title:pd.location_title,
        location_description:pd.location_description,
        location_g_map_location:pd.location_g_map_location,
        location_amenity_1:pd.location_amenity_1,
        location_amenity_1_details:pd.location_amenity_1_details,
        location_amenity_2:pd.location_amenity_2,
        location_amenity_2_details:pd.location_amenity_2_details,
        location_amenity_3:pd.location_amenity_3,
        location_amenity_3_details:pd.location_amenity_3_details,
        location_amenity_4:pd.location_amenity_4,
        location_amenity_4_details:pd.location_amenity_4_details
      };

      const property_json = {
        project_id: '',
        property_label: pd.property_label,
        property_title:pd.property_title,
        property_image: pd.property_image,
        property_image_alt:pd.property_image_alt,
        property_brochure:pd.property_brochure,
        property_brochure_alt:pd.property_brochure_alt,
        property_description: pd.property_description,
        property_spec_label:pd.property_spec_label,
        property_spec_title:pd.property_spec_title,
        property_spec_details_spec_1_title:pd.property_spec_details_spec_1_title,
        property_spec_details_spec_1_details: pd.property_spec_details_spec_1_details,
        property_spec_details_spec_2_title:pd.property_spec_details_spec_2_title,
        property_spec_details_spec_2_details:pd.property_spec_details_spec_2_details,
        property_spec_details_spec_3_title: pd.property_spec_details_spec_3_title,
        property_spec_details_spec_3_details: pd.property_spec_details_spec_3_details,
        property_spec_details_spec_4_title:pd.property_spec_details_spec_4_title,
        property_spec_details_spec_4_details:pd.property_spec_details_spec_4_details,
        property_spec_slider_image_1:pd.property_spec_slider_image_1,
        property_spec_slider_image_1_alt: pd.property_spec_slider_image_1_alt,
        property_spec_slider_image_2: pd.property_spec_slider_image_2,
        property_spec_slider_image_2_alt:pd.property_spec_slider_image_2_alt,
        property_spec_slider_image_3: pd.property_spec_slider_image_3,
        property_spec_slider_image_3_alt:pd.property_spec_slider_image_3_alt,
        property_spec_slider_image_4: pd.property_spec_slider_image_4,
        property_spec_slider_image_4_alt:pd.property_spec_slider_image_4_alt
      };

      const seo_json = {
        project_id:'',
        url:pd.url,
        meta:pd.meta
      };

      let project_id = pd.project_id;
      let result = {}
  
    await db.project.update(project_detail_json, {
      where: { project_id: project_id }
    })
      .then(
        result.project_details = project_detail_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating project "
        });
    });

    ameneties_json.project_id = project_id;
    architectures_json.project_id = project_id;
    locations_json.project_id = project_id;
    property_json.project_id = project_id;
    seo_json.project_id= project_id;

    await db.ameneties.update(ameneties_json, {
      where: { project_id: project_id }
    })
      .then(
          result.ameneties = ameneties_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating ameneties "
        });
    });

    await db.architecture.update(architectures_json, {
      where: { project_id: project_id }
    })
      .then(
          result.architecture = architectures_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating architecture "
        });
    });

    await db.seo.update(seo_json, {
      where: { project_id: project_id }
    })
      .then(
          result.seo = seo_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating seo "
        });
    });

    await db.faq.destroy({
      where: { project_id: project_id }
    })
      .then(
          console.log("Removed FAQ")
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating seo "
        });
    });

    result.faqs = [];
    await req.body.faq_details.forEach(faq => {

      faq.project_id = project_id;
      db.faq.create(faq)
          .then(data => {
              result.faqs.push(data);
      })
      .catch(err => {
          res.status(500).send({
              message:
                  err.message || "Some error occurred while creating faqs."
        });
      });
        
    });

    await db.project_unit.destroy({
      where: { project_id: project_id }
    })
      .then(
          console.log("Removed project unit")
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating project unit "
        });
    });

    result.project_unit = [];

    await req.body.project_units.forEach(project_unit => {

        project_unit.project_id = project_id;
        db.project_unit.create(project_unit)
            .then(data => {
                result.project_unit.push(data);
        })
        .catch(err => {
            res.status(500).send({
                message:
                    err.message || "Some error occurred while creating project_units."
            });
        });
        
    });

    await db.location.update(locations_json, {
      where: { project_id: project_id }
    })
      .then(
          result.location = locations_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating seo "
        });
    });

    await db.property.update(property_json, {
      where: { project_id: project_id }
    })
      .then(
          result.property = property_json
      )
      .catch(err => {
        res.status(500).send({
          message: "Error updating property "
        });
    });


    res.send(result);
};