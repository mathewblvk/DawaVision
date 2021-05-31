'use strict'

const Base =  require('./_base');

class Person {
    static tableName = 'person'; 

    constructor(person){

    this.first_name = person.first_name;
    this.last_name = person.last_name;
    this.email = person.email;
    this.gender = person.gender;
    this.date_of_birth = person.date_of_birth;
    this.country_of_birth = person.country_of_birth;
    }
    
}

module.exports = Person;