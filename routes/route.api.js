const express = require("express");
const router = express.Router();
const findPerson = require("../controllers/controller.findPerson");
const addPerson = require("../controllers/controller.addPerson");
const updateSalary = require("../controllers/controller.updateSalary");
const deletePerson = require("../controllers/controller.deletePerson");
const searchQuery = require("../controllers/controller.searchQuery");
const sortOrder = require("../controllers/controller.sortOrder");
const salaryFilter = require("../controllers/controller.salaryFilter");
const stats = require("../controllers/controller.stats");
const verifyAuth = require("../middleware/authToken");

/*
  Find the person that matches your query.
  http://localhost:3000/api/v1/persons?name=John&age=30
*/
router.get("/persons/", verifyAuth, searchQuery);

/*
  Sort the persons by the given order.
  http://localhost:3000/api/v1/persons/sort?salary=ASC
*/
router.get("/persons/sort/", verifyAuth, sortOrder);

/*
  Filter persons based on salary.
  http://localhost:3000/api/v1/persons/salary?gt=10&lt=1000
*/
router.get("/persons/salary/", verifyAuth, salaryFilter);

/*
  Displays the minimum, maximum and average salaries
  http://localhost:3000/api/v1/persons/stats
*/
router.get("/persons/stats", verifyAuth, stats);

/*
  Find the person that matches the ID
  http://localhost:3000/api/v1/person
*/
router.get("/person/:id", verifyAuth, findPerson);

/*
  Insert new person to the collection
  http://localhost:3000/api/v1/person
*/
router.post("/person/", verifyAuth, addPerson);

/*
  Update the salary of a person
  http://localhost:3000/api/v1/person/:id
*/
router.patch("/person/:id", verifyAuth, updateSalary);

/*
  Delete a person from the collection
  http://localhost:3000/api/v1/person
*/
router.delete("/person/:id", verifyAuth, deletePerson);

// exports
module.exports = router;
