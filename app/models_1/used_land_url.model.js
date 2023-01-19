module.exports = (sequelize, Sequelize) => {
    const UsedLandUrl = sequelize.define("used_land_urls", {
      
      url: {
        type: Sequelize.STRING,
        primaryKey: true
      },
     
    });
  
    return UsedLandUrl;
  };