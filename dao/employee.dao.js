'user strict';
const CollectionUtil = require('../util/collectionUtil');
const DatabaseService = require('../connection/conn');
const BaseDao = require('../dao/base.dao');
const Employee = require('../model/_person');

class EmployeeDao extends BaseDao {

    constructor() {
        super(Employee.tableName);
    }


    async search(id, name, limit=0, extra={}){
        let sql = 'SELECT * FROM ' + Employee.tableName;
        sql += ' WHERE id IS NOT NULL';

        if(id){ sql += ' AND id = "' + id + '"'; }
        if(name){ sql += ' AND name like "%' + name + '%"'; }
        sql += ' ORDER BY id DESC';
        if(limit && limit > 0) { sql += ' LIMIT ' + limit; }

        /*Logger.debug(sql);*/
        const databaseConnection = DatabaseService.getInstance();
        return await databaseConnection.queryDb(sql);
    }
}

module.exports = EmployeeDao;
