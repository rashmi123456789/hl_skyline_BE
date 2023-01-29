module.exports = (sequelize, Sequelize) => {
    const Unit = sequelize.define("unit", {
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
    },{
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Unit;
  };