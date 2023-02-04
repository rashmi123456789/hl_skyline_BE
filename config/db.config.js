module.exports = {
    HOST: "localhost",
    // PASSWORD: "",
    USER: "nodeapp_user",
    PASSWORD:"Wattakka@123",
    DB: "hl_skyline",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };
