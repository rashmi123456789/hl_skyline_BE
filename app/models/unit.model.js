module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define("Unit", {
        unit_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      zone_id: {
        type: Sequelize.INTEGER
      },
      type: {
        type: Sequelize.STRING
      },
      number_of_units: {
        type: Sequelize.INTEGER
      }
    });
  
    return Unit;
  };