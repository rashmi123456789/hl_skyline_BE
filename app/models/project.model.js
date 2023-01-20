module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("Project", {
        project_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      district: {
        type: Sequelize.STRING
      },
      matter_port: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      slider_1_img: {
        type: Sequelize.STRING
      },
      slider_1_atl: {
        type: Sequelize.STRING
      },
      slider_2_img: {
        type: Sequelize.STRING
      },
      slider_2_atl: {
        type: Sequelize.STRING
      },
      slider_3_img: {
        type: Sequelize.STRING
      },
      slider_3_atl: {
        type: Sequelize.STRING
      },
      slider_4_img: {
        type: Sequelize.STRING
      },
      slider_4_atl: {
        type: Sequelize.STRING
      },
      facility_label: {
        type: Sequelize.STRING
      },
      facility_title: {
        type: Sequelize.STRING
      },
      facility_description: {
        type: Sequelize.STRING
      },
      facility_1: {
        type: Sequelize.STRING
      },
      icon_1: {
        type: Sequelize.STRING
      },
      facility_2: {
        type: Sequelize.STRING
      },
      icon_2: {
        type: Sequelize.STRING
      },
      facility_3: {
        type: Sequelize.STRING
      },
      icon_3: {
        type: Sequelize.STRING
      },
      facility_4: {
        type: Sequelize.STRING
      },
      icon_4: {
        type: Sequelize.STRING
      },
      facility_5: {
        type: Sequelize.STRING
      },
      icon_5: {
        type: Sequelize.STRING
      },
      facility_6: {
        type: Sequelize.STRING
      },
      icon_6: {
        type: Sequelize.STRING
      },
      project_details_label: {
        type: Sequelize.STRING
      },
      project_details_title: {
        type: Sequelize.STRING
      },
      project_details_location: {
        type: Sequelize.STRING
      },
      project_details_number_of_bedrooms: {
        type: Sequelize.INTEGER
      },
      project_details_number_of_floors: {
        type: Sequelize.INTEGER
      },
      project_details_property_type: {
        type: Sequelize.STRING
      },
      project_details_number_of_units: {
        type: Sequelize.INTEGER
      },
      project_details_car_park_spaces: {
        type: Sequelize.STRING
      },
      project_details_architect: {
        type: Sequelize.STRING
      },
      project_details_developer: {
        type: Sequelize.STRING
      },
      video_url: {
        type: Sequelize.STRING
      },
      design_label: {
        type: Sequelize.STRING
      },
      design_title: {
        type: Sequelize.STRING
      },
      design_description_1: {
        type: Sequelize.STRING
      },
      design_image_1: {
        type: Sequelize.STRING
      },
      design_image_1_alt: {
        type: Sequelize.STRING
      },
      design_image_1_title: {
        type: Sequelize.STRING
      },
      design_description_2: {
        type: Sequelize.STRING
      },
      design_image_2: {
        type: Sequelize.STRING
      },
      design_image_2_alt: {
        type: Sequelize.STRING
      },
      design_image_2_title: {
        type: Sequelize.STRING
      },
      design_image_horizontal: {
        type: Sequelize.STRING
      },
      design_image_horizontal_alt: {
        type: Sequelize.STRING
      },
      design_image_horizontal_title: {
        type: Sequelize.STRING
      },
      project_plan_label: {
        type: Sequelize.STRING
      },
      project_plan_title: {
        type: Sequelize.STRING
      },
      project_plan_description: {
        type: Sequelize.STRING
      },
      project_plan_image: {
        type: Sequelize.STRING
      },
      project_plan_alt: {
        type: Sequelize.STRING
      },
      faq_label: {
        type: Sequelize.STRING
      },
      faq_title: {
        type: Sequelize.STRING
      },
      faq_description: {
        type: Sequelize.STRING
      }

    });
  
    return Project;
  };