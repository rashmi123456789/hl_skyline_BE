const dbConfig = require("../../config/db.config");

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
  host: dbConfig.HOST,
  dialect: dbConfig.dialect,
  define: {
    timestamps: false,
    freezeTableName: true
},
  operatorsAliases: false,

  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

sequelize
  .authenticate()
  .then(() => {
    //console.log('Connection has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.customer_details = require("./customer.model.js")(sequelize, Sequelize);
db.land = require("./land.model.js")(sequelize, Sequelize );
db.districts = require("./district.model.js")(sequelize, Sequelize);
db.amenties = require("./amenties.model.js")(sequelize, Sequelize);
db.land_proposal = require("./land_proposal.model.js")(sequelize, Sequelize);
db.user_message = require("./user_message.model.js")(sequelize, Sequelize);
db.blog = require("./blog.model.js")(sequelize, Sequelize);
db.job = require("./job.model.js")(sequelize, Sequelize);
db.user = require("./user.model.js")(sequelize, Sequelize);
db.used_land = require("./used_land_url.model.js")(sequelize, Sequelize);
module.exports = db;