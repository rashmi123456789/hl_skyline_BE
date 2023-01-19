module.exports = (sequelize, Sequelize) => {
    const District = sequelize.define("districts", {
      district_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      province: {
        type: Sequelize.STRING
      },
      intro_title: {
        type: Sequelize.STRING
      },
      intro : {
          type: Sequelize.STRING
      },
      image_path_1 : {
          type: Sequelize.STRING
      },
      image_path_2 : {
        type: Sequelize.STRING
     },
     image_path_3 : {
      type: Sequelize.STRING
     },
      button_url: {
          type : Sequelize.STRING
      },
      district_url : {
          type : Sequelize.STRING
      },
      amenties_id: {
          type: Sequelize.INTEGER
      },
      meta_data: {
          type: Sequelize.STRING
      },
      faq_1:{
        type: Sequelize.STRING
      },
      faq_2:{
        type: Sequelize.STRING
      },
      faq_3:{
        type: Sequelize.STRING
      },
      faq_4:{
        type: Sequelize.STRING
      },
      faq_ans_1:{
        type: Sequelize.STRING
      },
      faq_ans_2:{
        type: Sequelize.STRING
      },
      faq_ans_3:{
        type: Sequelize.STRING
      },
      faq_ans_4:{
        type: Sequelize.STRING
      },
    });
  
    return District;
  };