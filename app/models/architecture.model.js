module.exports = (sequelize, Sequelize) => {
    const Architecture = sequelize.define("Architecture", {
        architecture_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      architecture_label: {
        type: Sequelize.STRING
      },
      architecture_title: {
        type: Sequelize.STRING
      },
      architecture_description_1: {
        type: Sequelize.STRING
      },
      architecture_image_1: {
        type: Sequelize.STRING
      },
      architecture_image_1_alt: {
        type: Sequelize.STRING
      },
      architecture_image_1_title: {
        type: Sequelize.STRING
      },
      architecture_image_2: {
        type: Sequelize.STRING
      },
      architecture_image_2_alt: {
        type: Sequelize.STRING
      },
      architecture_image_2_title: {
        type: Sequelize.STRING
      },
      architecture_description_2: {
        type: Sequelize.STRING
      },
      architecture_image_horizontal: {
        type: Sequelize.STRING
      },
      architecture_image_horizontal_alt: {
        type: Sequelize.STRING
      },
      architecture_image_horizontal_title: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Architecture;
  };