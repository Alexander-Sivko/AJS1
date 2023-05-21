"use strict"

        // 1.Прототип - це об'єкт, від якого успадковують св-ва інші об'єкти.

        // 2. У JavaScript super посилається на конструктор базового класу. У нашому домашньому завданні super в конструкторі класу Programmer посилається на конструктор класу Employee.

class Employee {
    constructor (name, age, salary) {
        this._name = name,
        this._age = age,
        this._salary = salary
    };

    get name () {
        return this._name
    };

    set name(value) {
        this.name = value;
      };

    get age () {
        return this._age
    };

    set age(value) {
        this.age = value;
    }

    get salary () {
        return this._salary
    };

    set salary(value) {
        this.salary = value;
    }
      
};

const employee = new Employee('Oleksandr', 35, 2000);

console.log(employee.name, employee.age, employee.salary);

class Programmer extends Employee {
    constructor (name, age, salary, lang) {
        super(name, age, salary),
        this._lang = lang
    };

get salary () {
    return this._salary * 3;
};

get lang () {
    return this._lang;
};

set lang(value) {
    this.lang = value;
}
 
}

const programmer  = new Programmer ('Max', 35, 2000, 'english');

const programmer1  = new Programmer ('Sem', 30, 1500, 'japanese');

const programmer2  = new Programmer ('Den', 25, 1000, 'chinese');

console.log(programmer.name, programmer.age, programmer.salary, programmer.lang);

console.log(programmer1.name, programmer1.age, programmer1.salary, programmer1.lang);

console.log(programmer2.name, programmer2.age, programmer2.salary, programmer2.lang);
