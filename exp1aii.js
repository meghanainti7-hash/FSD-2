"use strict";
let studentName = "Mounika";
let marks = 92;
let passed = true;
console.log("Type of studentName: " + typeof studentName);
console.log("Type of marks: " + typeof marks);
console.log("Type of passed: " + typeof passed);
function studentDetails(name, marks, passed) {
    console.log("Student Name: " + name);
    console.log("Marks: " + marks);
    console.log("Result: " + (passed ? "Pass" : "Fail"));
}
studentDetails(studentName, marks, passed);
