module.exports = (sequelize, Sequelize) => {
    const Amenties = sequelize.define("amenties", {
      amenties_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      economic_url: {
        type: Sequelize.STRING
      },
      economic_intro: {
        type: Sequelize.STRING
      },
     education_url: {
        type: Sequelize.STRING
      },
      education_intro: {
        type: Sequelize.STRING
      },
      beauty_url: {
        type: Sequelize.STRING
      },
      beauty_intro: {
        type: Sequelize.STRING
      },
      service_url: {
        type: Sequelize.STRING
      },
      service_intro: {
        type: Sequelize.STRING
      },
      health_url: {
        type: Sequelize.STRING
      },
      health_intro: {
        type: Sequelize.STRING
      },
      religion_url: {
        type: Sequelize.STRING
      },
      religion_intro: {
        type: Sequelize.STRING
      },
      
    });
  
    return Amenties;
  };