module.exports = (sequelize, Sequelize) => {
    const LandProposal = sequelize.define("land_proposal_land_info", {
      land_proposal_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      customer_id: {
          type: Sequelize.INTEGER
      },
      district_name: {
        type: Sequelize.INTEGER
      },
      date_time: {
        type: Sequelize.STRING
      },
      city: {
        type: Sequelize.STRING
      },
      zipcode: {
        type: Sequelize.STRING
      },
      state: {
        type: Sequelize.STRING
      },
      address: {
          type: Sequelize.STRING
      },
      extend: {
          type: Sequelize.INTEGER
      },
      description: {
          type: Sequelize.STRING
      },
      proposal : {
        type: Sequelize.STRING
    },
    attachment_path: {
        type: Sequelize.STRING
    },
    is_read : {
        type: Sequelize.BOOLEAN
    }
    });
  
    return LandProposal;
  };