const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const Person = require("./models/model.PersonModel");
const bodyParser = require("body-parser");
const cors = require("cors");
const port = process.env.PORT || 8080;
const path = require("path");
const router = express.Router();

//import routes from the routes folder
const apiRoutes = require("./routes/route.api");
app.use(bodyParser.json());
app.use("/api/v1/", apiRoutes);

//create a home route
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname + "/index.html"));
});

//connect to mongoDB
mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

// start the server
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
