module.exports = (sequelize, Sequelize) => {
    const Job = sequelize.define("job", {
      job_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      title: {
        type: Sequelize.STRING
      },
      education: {
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
      },
      main_description: {
        type: Sequelize.STRING
    }
    });
  
    return Job;
  };