class Employee {

    public static readonly companyName: string = "Infosys";
    public static totalEmployees: number = 0;

    public readonly employeeId: string;
    public employeeName: string;

    constructor(name: string, id: string) {
        this.employeeName = name;
        this.employeeId = id;

        Employee.totalEmployees++;
    }

    public static companyPolicy(): void {
        console.log(`Welcome to ${this.companyName}. Employees must follow company rules.`);
    }

    public displayEmployee(): void {
        console.log(`Employee: ${this.employeeName}`);
        console.log(`Employee ID: ${this.employeeId}`);
    }
}

// Execution
console.log(Employee.companyName);
Employee.companyPolicy();

const emp1 = new Employee("Rahul", "EMP001");
const emp2 = new Employee("Sneha", "EMP002");

console.log(emp1.employeeId);
// emp1.employeeId = "EMP999"; // Error

emp1.displayEmployee();
emp2.displayEmployee();

console.log(`Total Employees: ${Employee.totalEmployees}`);