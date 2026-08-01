"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    constructor(id) {
        this.studentId = id;
    }
    display() {
        console.log("Student ID:", this.studentId);
    }
}
let student = new Student(101);
student.display();
