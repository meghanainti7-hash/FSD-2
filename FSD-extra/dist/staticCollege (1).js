"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Student {
    static displayCollege() {
        console.log("College:", Student.collegeName);
    }
}
Student.collegeName = "SVECW";
Student.displayCollege();
