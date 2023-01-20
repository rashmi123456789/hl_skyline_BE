module.exports = (sequelize, Sequelize) => {
    const Housing_unit = sequelize.define("Housing_unit", {
        housing_unit_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Housing_unit;
  };