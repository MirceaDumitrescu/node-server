const Person = require("../models/model.PersonModel");

const sortOrder = (req, res) => {
  let queryObj = { ...req.query };
  console.log(queryObj);
  if (queryObj.salary === "ASC") {
    delete queryObj.salary;
    Person.find(queryObj)
      .sort({ salary: 1 })
      .then((persons) => {
        res.send(persons);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  } else if (queryObj.salary === "DESC") {
    delete queryObj.salary;
    Person.find(queryObj)
      .sort({ salary: -1 })
      .then((persons) => {
        res.send(persons);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

module.exports = sortOrder;
