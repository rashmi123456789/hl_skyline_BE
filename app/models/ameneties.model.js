module.exports = (sequelize, Sequelize) => {
    const Amenties = sequelize.define("Amenties", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      ameneties_label: {
        type: Sequelize.STRING
      },
      ameneties_title: {
        type: Sequelize.STRING
      },
      ameneties_details_image: {
        type: Sequelize.STRING
      },
      ameneties_details_image_alt: {
        type: Sequelize.STRING
      },
      ameneties_details_description: {
        type: Sequelize.STRING
      },
      ameneties_image_1: {
        type: Sequelize.STRING
      },
      ameneties_image_1_alt: {
        type: Sequelize.STRING
      },
      ameneties_image_1_title: {
        type: Sequelize.STRING
      },
      ameneties_image_1_description: {
        type: Sequelize.STRING
      },
      ameneties_image_2: {
        type: Sequelize.STRING
      },
      ameneties_image_2_alt: {
        type: Sequelize.STRING
      },
      ameneties_image_2_title: {
        type: Sequelize.STRING
      },
      ameneties_image_2_description: {
        type: Sequelize.STRING
      },
      ameneties_image_horizontal: {
        type: Sequelize.STRING
      },
      ameneties_image_horizontal_alt: {
        type: Sequelize.STRING
      },
      ameneties_image_horizontal_title: {
        type: Sequelize.STRING
      },
      ameneties_image_vertical: {
        type: Sequelize.STRING
      },
      ameneties_image_vertical_alt: {
        type: Sequelize.STRING
      },
      ameneties_image_vertical_title: {
        type: Sequelize.STRING
      },
      ameneties_short_description: {
        type: Sequelize.STRING
      }
    });
  
    return Amenties;
  };