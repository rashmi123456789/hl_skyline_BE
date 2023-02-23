module.exports = {
    HOST: "localhost",
    USER: "nodeapp_user",
    // USER: "root",
    PASSWORD:"Wattakka@123",
    // PASSWORD:"WMgim@96",
    DB: "hl_skyline",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
