module.exports = (sequelize, Sequelize) => {
    const Contact = sequelize.define("Contact", {
        contact_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      phone_no: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      how_can_help: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Contact;
  };