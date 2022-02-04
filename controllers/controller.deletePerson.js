const Person = require("../models/model.PersonModel");

const deletePerson = (req, res) => {
  Person.findByIdAndDelete(req.params.id)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = deletePerson;
