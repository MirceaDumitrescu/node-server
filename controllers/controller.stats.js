const Person = require("../models/model.PersonModel");

const stats = (req, res) => {
  Person.find({}, (err, persons) => {
    if (err) {
      res.send(err);
    } else {
      let minSalary = persons[0].salary;
      let maxSalary = persons[0].salary;
      let sumSalary = 0;
      let avgSalary = 0;
      persons.forEach((person) => {
        if (person.salary < minSalary) {
          minSalary = person.salary;
        }
        if (person.salary > maxSalary) {
          maxSalary = person.salary;
        }
        sumSalary += person.salary;
      });
      avgSalary = sumSalary / persons.length;
      res.json({
        minSalary,
        maxSalary,
        avgSalary,
      });
    }
  });
};

module.exports = stats;
