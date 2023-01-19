module.exports = (sequelize, Sequelize) => {
    const Customer = sequelize.define("customer_details", {
      customer_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      first_name: {
        type: Sequelize.STRING
      },
      last_name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      phone: {
          type: Sequelize.INTEGER
      }
    });
  
    return Customer;
  };