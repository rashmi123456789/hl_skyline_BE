module.exports = (sequelize, Sequelize) => {
    const Property = sequelize.define("Property", {
        property_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      property_label: {
        type: Sequelize.STRING
      },
      property_title: {
        type: Sequelize.STRING
      },
      property_image: {
        type: Sequelize.STRING
      },
      property_image_alt: {
        type: Sequelize.STRING
      },
      property_brochure: {
        type: Sequelize.STRING
      },
      property_brochure_alt: {
        type: Sequelize.STRING
      },
      property_description: {
        type: Sequelize.STRING
      },
      property_spec_label: {
        type: Sequelize.STRING
      },
      property_spec_title: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_1_title: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_1_details: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_2_title: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_2_details: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_3_title: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_3_details: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_4_title: {
        type: Sequelize.STRING
      },
      property_spec_details_spec_4_details: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_1: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_1_alt: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_2: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_2_alt: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_3: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_3_alt: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_4: {
        type: Sequelize.STRING
      },
      property_spec_slider_image_4_alt: {
        type: Sequelize.STRING
      }
    },{
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Property;
  };