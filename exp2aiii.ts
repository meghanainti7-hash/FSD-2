function employee(name: string): string {
    return `Employee: ${name}`;
}

function department(dept: string = "IT"): string {
    return `Department: ${dept}`;
}

function notify(empId: number, message?: string): void {
    console.log(`Notification sent to Employee ID: ${empId}`);
    if (message) {
        console.log(`Message: ${message}`);
    }
}

function totalSalary(...salary: number[]): number {
    return salary.reduce((sum, value) => sum + value, 0);
}

console.log(employee("Rahul"));
console.log(department());
console.log(department("HR"));

notify(101);
notify(101, "Meeting at 10 AM");

const salary = totalSalary(25000, 30000, 28000);
console.log(`Total Salary: ${salary}`);