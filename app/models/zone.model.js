module.exports = (sequelize, Sequelize) => {
    const zone = sequelize.define("Zone", {
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
    }
    ,
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    }
    );
  
    return zone;
  };