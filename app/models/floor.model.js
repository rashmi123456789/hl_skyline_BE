module.exports = (sequelize, Sequelize) => {
    const Floor = sequelize.define("Floor", {
        floor_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      tower_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      type: {
        type: Sequelize.STRING
      },
      number_of_units: {
        type: Sequelize.INTEGER
      }
    });
  
    return Floor;
  };