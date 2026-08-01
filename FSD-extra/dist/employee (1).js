"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    constructor(name, salary, department) {
        this.name = name;
        this.salary = salary;
        this.department = department;
    }
    display() {
        console.log(this.name);
        console.log(this.salary);
        console.log(this.department);
    }
}
let emp = new Employee("John", 50000, "IT");
emp.display();
