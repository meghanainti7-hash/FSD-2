"use strict";
function student(name) {
    return `Student Name: ${name}`;
}
function college(collegeName = "SVECW") {
    return `College: ${collegeName}`;
}
function sendEmail(email, subject) {
    console.log(`Sending Email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}
function averageMarks(...marks) {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}
console.log(student("Anjali"));
console.log(college());
console.log(college("JNTUH"));
sendEmail("student@gmail.com");
sendEmail("student@gmail.com", "Exam Schedule");
const avg = averageMarks(80, 90, 85, 95);
console.log(`Average Marks: ${avg}`);
