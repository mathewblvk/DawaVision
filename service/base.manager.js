'user strict';
const BaseDao = require('../dao/base.dao');

class BaseManager {
    baseDao = new BaseDao();

    constructor(baseDao) {
        this.baseDao = baseDao;
    }

    async all(){
        return await this.baseDao.all();
    }

    async search(id, limit=0, extra={}){
        return await this.baseDao.search(id, limit, extra);
    }


}

module.exports = BaseManager;
