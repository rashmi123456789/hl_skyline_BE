module.exports = (sequelize, Sequelize) => {
    const Housing_unit = sequelize.define("housing_unit", {
        housing_unit_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Housing_unit;
  };