'use strict'
class Base  {
    constructor(base){
        this.id = base.id;

        this.company_uid = base.company_uid;
        this.company_id = base.company_id;

        this.created_by = base.created_by;
        this.created_time = base.created_time;
        this.modified_by = base.modified_by;
        this.modified_time = base.modified_time;
    }
}

module.exports = Base;