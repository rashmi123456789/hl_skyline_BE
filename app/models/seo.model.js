module.exports = (sequelize, Sequelize) => {
    const Seo = sequelize.define("Seo", {
        seo_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      url: {
        type: Sequelize.STRING
      },
      meta: {
        type: Sequelize.STRING
      }
    });
  
    return Seo;
  };