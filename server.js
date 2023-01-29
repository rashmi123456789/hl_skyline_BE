const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

var corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ extended: true,limit: '50mb' }));

const db = require("./app/models");

app.get("/", (req, res) => {
  res.json({ message: "Application is Running Well" });
});

require("./app/routes/ameneties.routes")(app);
require("./app/routes/apartment_unit.routes")(app);
require("./app/routes/architecture.routes")(app);
require("./app/routes/faq.routes")(app);
require("./app/routes/floor.routes")(app);
require("./app/routes/housing_unit.routes")(app);
require("./app/routes/job.routes")(app);
require("./app/routes/location.routes")(app);
require("./app/routes/project_unit.routes")(app);
require("./app/routes/project.routes")(app);
require("./app/routes/property.routes")(app);
require("./app/routes/seo.routes")(app);
require("./app/routes/tower.routes")(app);
require("./app/routes/unit.routes")(app);
require("./app/routes/zone.routes")(app);
require("./app/routes/all_resources.routes")(app);
require("./app/routes/contact.routes")(app);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});