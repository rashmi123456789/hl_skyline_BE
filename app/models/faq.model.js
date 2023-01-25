module.exports = (sequelize, Sequelize) => {
    const Faq = sequelize.define("faq", {
        faq_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      question: {
        type: Sequelize.STRING
      },
      answer: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Faq;
  };