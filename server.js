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
  res.json({ message: "Welcome to bezkoder application." });
});
require("./app/routes/customer.routes")(app);
require("./app/routes/land.routes")(app);
require("./app/routes/amenties.routes")(app);
require("./app/routes/district.routes")(app);
require("./app/routes/land_proposal.routes")(app);
require("./app/routes/user_message.routes")(app);
require("./app/routes/blog.routes")(app);
require("./app/routes/job.routes")(app);
require("./app/routes/user.routes")(app);
require("./app/routes/fileupload.routes")(app);
require("./app/routes/used_land_url.routes")(app);
require("./app/routes/housing.routes")(app);
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  //console.log(`Server is running on port ${PORT}.`);
});