"use strict";
let courseName = "TypeScript";
let duration = 30;
let isPopular = true;
function getCourseInfo(name, days) {
    return `${name} course duration is ${days} days`;
}
let topics = [
    "Variables",
    "Functions",
    "Arrays",
    "Classes"
];
const info = getCourseInfo(courseName, duration);
console.log(info);
console.log(`Topics: ${topics.join(", ")}`);
console.log(`Popular Course? ${isPopular ? "Yes" : "No"}`);
