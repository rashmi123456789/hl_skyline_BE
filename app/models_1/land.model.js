module.exports = (sequelize, Sequelize) => {
    const Land = sequelize.define("land", {
      land_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING
      },
      price: {
        type: Sequelize.INTEGER
      },
      district_id: {
        type: Sequelize.INTEGER
      },
      total_blocks: {
          type: Sequelize.INTEGER
      },
      available_blocks: {
          type: Sequelize.INTEGER
      },
      land_description: {
          type: Sequelize.STRING
      },
      city_name : {
        type: Sequelize.STRING
    },
    status: {
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
    description :{
        type: Sequelize.STRING
    },
    province  :{
        type : Sequelize.STRING
    },
    extent : {
        type :Sequelize.STRING
    },
    water : {
        type:Sequelize.INTEGER
    },

    carpet_road : {
        type:Sequelize.INTEGER
    },
    bus_route : {
        type:Sequelize.INTEGER
    },
    paddy_view : {
        type:Sequelize.INTEGER
    },
    private_schools : {
        type:Sequelize.INTEGER
    },
    main_road : {
        type:Sequelize.INTEGER
    },

    electricity  : {
        type:Sequelize.INTEGER
    },
    school   : {
        type:Sequelize.INTEGER
    },
    hospital    : {
        type:Sequelize.INTEGER
    },
    amenties_id : {
        type: Sequelize.INTEGER
    },
    button_url : {
        type : Sequelize.STRING
    },
    project_plan_image_path : {
        type : Sequelize.STRING
    },
    project_plan_intro  : {
        type : Sequelize.STRING
    },
    map_description_1: {
        type: Sequelize.STRING
    },
    map_description_2 : {
        type: Sequelize.STRING
    },
    location_lan : {
        type: Sequelize.FLOAT
    },
    location_lat : {
        type: Sequelize.FLOAT
    },
    project_url  : {
        type: Sequelize.STRING
    },
    meta_data    :{
        type:  Sequelize.STRING
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
  
    return Land;
  };