module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
        job_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      qualification: {
        type: Sequelize.STRING
      },
      location: {
        type: Sequelize.STRING
      },
      experience: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Job;
  };