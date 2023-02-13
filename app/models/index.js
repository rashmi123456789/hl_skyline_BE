const dbConfig = require("../../config/db.config.js");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(
    dbConfig.DB,
    dbConfig.USER,
    dbConfig.PASSWORD,
  {
    host: dbConfig.HOST,
    dialect: dbConfig.dialect,

    pool: {
      max: dbConfig.pool.max,
      min: dbConfig.pool.min,
      acquire: dbConfig.pool.acquire,
      idle: dbConfig.pool.idle,
    },
  }
);

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.apartment_unit = require("./apartment_unit.model.js")(sequelize, Sequelize);
db.tower = require("./tower.model.js")(sequelize, Sequelize);
db.floor = require("./floor.model.js")(sequelize, Sequelize);
db.housing_unit = require("./housing_unit.model.js")(sequelize, Sequelize);
db.zone = require("./zone.model.js")(sequelize, Sequelize);
db.unit = require("./unit.model.js")(sequelize, Sequelize);
db.ameneties = require("./ameneties.model.js")(sequelize, Sequelize);
db.property = require("./property.model.js")(sequelize, Sequelize);
db.location = require("./location.model.js")(sequelize, Sequelize);
db.architecture = require("./architecture.model.js")(sequelize, Sequelize);
db.project = require("./project.model.js")(sequelize, Sequelize);
db.faq = require("./faq.model.js")(sequelize, Sequelize);
db.project_unit = require("./project_unit.model.js")(sequelize, Sequelize);
db.seo = require("./seo.model.js")(sequelize, Sequelize);
db.job = require("./Job.model.js")(sequelize, Sequelize);
db.contact = require("./contact.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
// db.good.belongsTo(db.stock, { foreignKey: "code" });
// db.stock.hasMany(db.good, { foreignKey: "code" });

// db.item.belongsTo(db.stock, { foreignKey: "code" });
// db.stock.hasMany(db.item, { foreignKey: "code" });

module.exports = db;