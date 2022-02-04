const Person = require("../models/model.PersonModel");

const salaryFilter = (req, res) => {
  let query = { ...req.query };
  console.log(query);
  if (query.gt && query.lt && query.gt < query.lt) {
    Person.aggregate([
      {
        $match: {
          salary: {
            $gt: Number(query.gt),
            $lt: Number(query.lt),
          },
        },
      },
    ])
      .then((persons) => {
        res.send(persons);
      })
      .catch((err) => {
        res.status(400).send(err);
      });
  }
};

module.exports = salaryFilter;
