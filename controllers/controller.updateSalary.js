const Person = require("../models/model.PersonModel");

const updateSalary = (req, res) => {
  Person.findByIdAndUpdate(req.params.id, {
    $set: {
      salary: req.body.salary,
    },
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });
};

module.exports = updateSalary;
