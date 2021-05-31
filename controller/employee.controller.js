'user strict';


const Person = require('../model/_person');
const EmployeeService = require('../service/employee.manager');
const ResponseUtil = require('../util/responseUtil');

const employeeService = new EmployeeService();

class EmployeeController {
    static async list(req, res, next) {
        try {
            let query = req.query.q;
            const extra = { };
            let listOfProject = await employeeService.search(null, query, 0, extra);
            ResponseUtil.send(ResponseUtil.OK, "Successful", listOfProject, res);
        } catch (e) {
            next(e);
        }
    }

}

module.exports = EmployeeController;
