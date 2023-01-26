module.exports = (sequelize, Sequelize) => {
    const Apartment_unit = sequelize.define("apartment_unit", {
        apartment_unit_id: {
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
  
    return Apartment_unit;
  };