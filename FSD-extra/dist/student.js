"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id, name, marks) {
        this.id = id;
        this.name = name;
        this.marks = marks;
    }
    display() {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}
let student = new Student(101, "Mouni", 95);
student.display();
