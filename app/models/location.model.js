module.exports = (sequelize, Sequelize) => {
    const Location = sequelize.define("location", {
        location_id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true,
      },
      project_id: {
        type: Sequelize.INTEGER
      },
      location_label: {
        type: Sequelize.STRING
      },
      location_title: {
        type: Sequelize.STRING
      },
      location_description: {
        type: Sequelize.STRING
      },
      location_g_map_location: {
        type: Sequelize.STRING
      },
      location_amenity_1: {
        type: Sequelize.STRING
      },
      location_amenity_1_details: {
        type: Sequelize.STRING
      },
      location_amenity_2: {
        type: Sequelize.STRING
      },
      location_amenity_2_details: {
        type: Sequelize.STRING
      },
      location_amenity_3: {
        type: Sequelize.STRING
      },
      location_amenity_3_details: {
        type: Sequelize.STRING
      },
      location_amenity_4: {
        type: Sequelize.STRING
      },
      location_amenity_4_details: {
        type: Sequelize.STRING
      }
    },
    {
      freezeTableName: true,
      timestamps: true,
      createdAt: true,
      updatedAt: true,
    });
  
    return Location;
  };