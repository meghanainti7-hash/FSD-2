"use strict";
class Student {
    studentName;
    marks;
    password;
    attendance = 90;
    constructor(name, marks, password) {
        this.studentName = name;
        this.marks = marks;
        this.password = password;
    }
    showResult() {
        console.log(`${this.studentName}'s Marks: ${this.marks}`);
    }
    verifyPassword(pass) {
        return this.password === pass;
    }
}
class CollegeStudent extends Student {
    showAttendance() {
        console.log(`Attendance: ${this.attendance}%`);
    }
}
// Execution
const student = new Student("Rahul", 95, "abc123");
console.log(`Student Name: ${student.studentName}`);
student.showResult();
const collegeStudent = new CollegeStudent("Rahul", 95, "abc123");
collegeStudent.showAttendance();
