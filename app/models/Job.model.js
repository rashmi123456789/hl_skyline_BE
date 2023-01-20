module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("Job", {
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
    });
  
    return Job;
  };