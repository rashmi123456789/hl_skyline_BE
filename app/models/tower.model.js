module.exports = (sequelize, Sequelize) => {
    const Tower = sequelize.define("Tower", {
        tower_id: {
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
    },{
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Tower;
  };