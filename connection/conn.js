'use strict'
const { Pool } = require('pg');
const CollectionUtil = require('../Util/collectionUtil');
const appEnum = require('../Emun/app')

class DatabaseConnection{
     #dbPool = null;

    constructor(){
        var dbUser = appEnum.DATABASE_CONFIG.USER.user;
        var dbHost = appEnum.DATABASE_CONFIG.HOST.host;
        var dbName = appEnum.DATABASE_CONFIG.NAME.name;
        var dbPassword = appEnum.DATABASE_CONFIG.PASSWORD.password;
        var PgPort = appEnum.DATABASE_CONFIG.PORT.port;

        const dbConfig = {
            user: dbUser,
            host: dbHost,
            name: dbName,
            password: dbPassword,
            port: PgPort
        }

        this.#dbPool =  new Pool({dbConfig})
    }

    
    async queryOneDb(sql){
        const items = await this.queryDB(sql, (results, error) => {
            if (error) {
                throw error
            }
    
            if (CollectionUtil.isNotEmpty(items)) {
                return items[0]
            }
            return null;
        });
    
    };

    async queryDB(sql, params={}){
        return Promise = ((resolve, reject) => {
            this.#dbPool.query(sql,params, (results, error) => {
                if (error) {
                    reject(error)
                    return;
                }
                resolve(results)
            });

        })
    }

    async deleteFrom(tableName, where, andWhere){
        const slq = await this.actionDb('DELETE FROM', tableName, where, andWhere, null)
            return await this.queryDB(sql);
    }
    
    async actionDb(action ,table, where, andWhere, limit=0){
        let whereStatement = '';
        let andWhereStatement = '';
        let limitStatement = '';
        if (where && where ===3) {
            const colums = where[0];
            const operator = where[1];
            const value = where[2];
            whereStatement = 'WHERE' + colums + operator + '"' + value + '"';
        }
        if (andWhere && andWhere === 3) {
            const andColums = where[0];
            const andOperator = where[1];
            const andValue = where[2];
            whereStatement = 'AND' + andColums + andOperator + '"' + andValue + '"';
        }
        
        if (limit && limit > 0){
            limitStatement = 'LIMIT ' + limit;
        }
        return action +  ' ' + table + whereStatement + andWhereStatement + limitStatement;
    }
}


class DatabaseService {

    constructor() {
        throw new Error('Use DatabaseService.getInstance()');
    }

    static getInstance() {
        if (!DatabaseService.instance) {
            DatabaseService.instance = new DatabaseConnection();
        }
        return DatabaseService.instance;
    }
}

module.exports = DatabaseService;


