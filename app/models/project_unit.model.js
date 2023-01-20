module.exports = (sequelize, Sequelize) => {
    const Project_unit = sequelize.define("Project_unit", {
        project_unit_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      name: {
        type: Sequelize.STRING
      },
      image: {
        type: Sequelize.STRING
      },
      alt: {
        type: Sequelize.STRING
      },
      beds: {
        type: Sequelize.INTEGER
      },
      baths: {
        type: Sequelize.INTEGER
      },
      floor_area: {
        type: Sequelize.INTEGER
      },
      floors_zones: {
        type: Sequelize.INTEGER
      },
      price: {
        type: Sequelize.INTEGER
      },
      plan: {
        type: Sequelize.INTEGER
      }
    });
  
    return Project_unit;
  };