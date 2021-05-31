const express = require('express');
const initConnect = require('express');
var router = express.Router();

const EmployeeController = require('../controller/employee.controller');


/* GET home page. */
router.get('/', EmployeeController.list)


module.exports = router;
