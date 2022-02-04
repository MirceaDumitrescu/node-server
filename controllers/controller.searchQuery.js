const Person = require("../models/model.PersonModel");

const searchQuery = async (req, res) => {
  const filters = { ...req.query };
  const withOutFileds = ["page", "sort", "limit", "fields"];
  withOutFileds.forEach((el) => {
    delete filters[el];
  });
  const persons = await Person.find(filters);
  const filteredUsers = persons.filter((user) => {
    let isValid = true;
    for (key in filters) {
      console.log(key, user[key], filters[key]);
      isValid = isValid && user[key] == filters[key];
    }
    return isValid;
  });
  res.send(filteredUsers);
};

module.exports = searchQuery;
