//create a mongoose schema for the Person

//it will contain the following fields: first name, last name, city, country and salary.

const mongoose = require("mongoose");

const PersonSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  salary: {
    type: Number,
    required: true,
  },
});

//export the model
module.exports = mongoose.model("Person", PersonSchema);
