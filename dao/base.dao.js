'use strict';

const databaseService = require('../connection/conn');

class BaseDao{
    #tableName = null;
    
    constructor(tableName){
        this.#tableName = tableName;
    }


    async all(){
        return this.search(null, null);
    }

    async search(id, limit={}, extra={}){
        let sql = 'SELECT * FROM ' + this.#tableName;
        sql += 'WHERE id IS NOT NULL';

        if (id) { sql += ' AND id = "' + id + '"'; }
        if(extra){
            if(extra.name){ sql += ' AND name like "%' + extra.name + '%"'; }
            if(extra.company_id){ sql += ' AND company_id = "' + extra.company_id + '"'; }
        }
        if(limit && limit > 0) { sql += ' LIMIT ' + limit; }
        const databaseConnection = databaseService.getInstance();
        return await databaseConnection.queryDb(sql);
        
    }

}

module.exports = BaseDao;
