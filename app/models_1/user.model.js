module.exports = (sequelize, Sequelize) => {
    const User = sequelize.define("user", {
      user_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      token: {
          type: Sequelize.STRING
      }
    });
  
    return User;
  };