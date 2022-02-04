const Person = require("../models/model.PersonModel");

const findPerson = (req, res) => {
  Person.findById(req.params.id)
    .then((person) => {
      res.status(200).json({
        message: "Person fetched successfully",
        person: person,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({
        error: err,
      });
    });
};

module.exports = findPerson;
