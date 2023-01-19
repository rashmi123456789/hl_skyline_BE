module.exports = (sequelize, Sequelize) => {
    const Project = sequelize.define("Project", {
        id: {
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
  
    return Project;
  };