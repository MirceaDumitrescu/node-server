const Person = require("../models/model.PersonModel");

const addPerson = async (req, res) => {
  const post = new Person({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    city: req.body.city,
    country: req.body.country,
    salary: req.body.salary,
  });
  try {
    const savePerson = await post.save();
    res.json(savePerson);
  } catch (err) {
    res.json({ message: err });
  }
};

module.exports = addPerson;
