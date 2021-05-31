'user strict';

const BaseManager = require('../service/base.manager');
const EmployeeDao = require('../dao/employee.dao');

class EmployeeService extends BaseManager{
    #employeeDao;

    constructor() {
        super(new EmployeeDao());
        this.#employeeDao = this.baseDao;
    }

    async search(id, name, limit=0, extra={}) {
        return await this.#employeeDao.search(id, name, limit, extra);
    }
}

module.exports = EmployeeService;
