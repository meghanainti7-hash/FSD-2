"use strict";
function employee(name) {
    return `Employee: ${name}`;
}
function department(dept = "IT") {
    return `Department: ${dept}`;
}
function notify(empId, message) {
    console.log(`Notification sent to Employee ID: ${empId}`);
    if (message) {
        console.log(`Message: ${message}`);
    }
}
function totalSalary(...salary) {
    return salary.reduce((sum, value) => sum + value, 0);
}
console.log(employee("Rahul"));
console.log(department());
console.log(department("HR"));
notify(101);
notify(101, "Meeting at 10 AM");
const salary = totalSalary(25000, 30000, 28000);
console.log(`Total Salary: ${salary}`);
