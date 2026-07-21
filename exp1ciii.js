"use strict";
let studentName = "Rahul";
let marks = 92;
let passed = true;
function getResult(name, score) {
    return `${name} scored ${score} marks`;
}
let subjects = [
    "Maths",
    "Physics",
    "Chemistry"
];
const result = getResult(studentName, marks);
console.log(result);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Passed? ${passed ? "Yes" : "No"}`);
