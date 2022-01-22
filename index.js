const express = require("express");
const mongooose = require("mongoose");
const app = express();
require("dotenv/config");

const postRoute = require("./views/posts");

app.use("/posts", postRoute);

//ROUTES
app.get("/", (req, res) => {
  res.send("Hello World");
});

//START SERVER
app.listen(3000, () => {
  console.log("Server started on port 3000");
});

app.post("/", (req, res) => {
  res.send("Hello World");
});

item.save().then(
  () => {
    
)

//connect to db
mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
  },
  () => {
    console.log("Connected to db");
  }
);
