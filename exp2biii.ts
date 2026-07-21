// 1. Traditional Function

function calculateSalaryTraditional(salary: number, bonus: number): number {
    return salary + bonus;
}

// 2. Arrow Function

const calculateSalaryArrow = (salary: number, bonus: number): number => {
    return salary + bonus;
};

// 3. Shorthand Arrow Function

const getEmployeeMessage = (name: string): string =>
    `Welcome ${name}!`;

// --- Testing ---

const basicSalary: number = 30000;
const bonus: number = 5000;

console.log(getEmployeeMessage("Tanuja"));

const totalSalary1 = calculateSalaryTraditional(basicSalary, bonus);
console.log(`Total Salary (Traditional): ₹${totalSalary1}`);

const totalSalary2 = calculateSalaryArrow(basicSalary, bonus);
console.log(`Total Salary (Arrow): ₹${totalSalary2}`);