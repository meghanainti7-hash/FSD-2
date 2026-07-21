class Employee {

    // Properties
    public empName: string;
    public basicSalary: number;
    public hra: number;
    public bonus: number;

    // Constructor Overloading
    constructor(name: string, salary: number);
    constructor(name: string, salary: number, hra: number, bonus: number);

    // Constructor Implementation
    constructor(name: string, salary: number, hra?: number, bonus?: number) {
        this.empName = name;
        this.basicSalary = salary;
        this.hra = hra ?? 5000;
        this.bonus = bonus ?? 2000;
    }

    // Method to calculate total salary
    public calculateSalary(): number {
        return this.basicSalary + this.hra + this.bonus;
    }

    // Method to display employee details
    public displayDetails(): void {
        console.log("----- Employee Details -----");
        console.log(`Employee: ${this.empName}`);
        console.log(`Basic Salary: ₹${this.basicSalary}`);
        console.log(`HRA: ₹${this.hra}`);
        console.log(`Bonus: ₹${this.bonus}`);
        console.log(`Total Salary: ₹${this.calculateSalary()}`);
        console.log("----------------------------\n");
    }
}

// Employee 1 (Default HRA & Bonus)
const emp1 = new Employee("Rahul", 30000);

// Employee 2 (Custom HRA & Bonus)
const emp2 = new Employee("Sneha", 45000, 8000, 5000);

// Display Employee Details
emp1.displayDetails();
emp2.displayDetails();

// Update Basic Salary
emp2.basicSalary = 50000;

// Display Updated Salary
console.log(`Updated Salary: ₹${emp2.calculateSalary()}`);