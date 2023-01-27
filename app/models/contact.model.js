module.exports = (sequelize, Sequelize) => {
    const contact = sequelize.define("contact", {
        contact_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      phone: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      question: {
        type: Sequelize.STRING
      },
      project_name: {
        type: Sequelize.STRING,
        default:null
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return contact;
  };