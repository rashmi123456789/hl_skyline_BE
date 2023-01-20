module.exports = (sequelize, Sequelize) => {
    const Zone = sequelize.define("Zone", {
        zone_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      }
    });
  
    return Zone;
  };