module.exports = (sequelize, Sequelize) => {
    const Faq = sequelize.define("Faq", {
        id: {
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
    });
  
    return Faq;
  };