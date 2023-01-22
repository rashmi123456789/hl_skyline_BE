module.exports = {
    HOST: "localhost",
    USER: "root",
    // PASSWORD: "Rashmi<3127",
    PASSWORD:"p@ssw0rd",
    DB: "hl_skyline",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };