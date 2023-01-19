module.exports = (sequelize, Sequelize) => {
    const UserMessage = sequelize.define("user_messages", {
      message_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      customer_id: {
          type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.STRING
      },
      subject: {
        type: Sequelize.STRING
      },
      message: {
        type: Sequelize.STRING
      },
    is_read : {
        type: Sequelize.BOOLEAN
    },
    project : {
      type: Sequelize.STRING
  }
    });
  
    return UserMessage;
  };