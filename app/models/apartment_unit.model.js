module.exports = (sequelize, Sequelize) => {
    const Apartment_unit = sequelize.define("Apartment_unit", {
        id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      }
    });
  
    return Apartment_unit;
  };