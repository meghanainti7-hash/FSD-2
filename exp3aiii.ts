class Student {

    // Properties
    public studentName: string;
    public marks1: number;
    public marks2: number;
    public marks3: number;

    // Constructor Overloading
    constructor(name: string);
    constructor(name: string, m1: number, m2: number, m3: number);

    // Constructor Implementation
    constructor(name: string, m1?: number, m2?: number, m3?: number) {
        this.studentName = name;
        this.marks1 = m1 ?? 50;
        this.marks2 = m2 ?? 50;
        this.marks3 = m3 ?? 50;
    }

    // Method to calculate total marks
    public calculateTotal(): number {
        return this.marks1 + this.marks2 + this.marks3;
    }

    // Method to display student details
    public displayDetails(): void {
        console.log("----- Student Report -----");
        console.log(`Student: ${this.studentName}`);
        console.log(`Marks1: ${this.marks1}`);
        console.log(`Marks2: ${this.marks2}`);
        console.log(`Marks3: ${this.marks3}`);
        console.log(`Total: ${this.calculateTotal()}`);
        console.log("--------------------------\n");
    }
}

// Student 1 (Default marks)
const student1 = new Student("Ravi");

// Student 2 (Custom marks)
const student2 = new Student("Priya", 85, 90, 95);

// Display details
student1.displayDetails();
student2.displayDetails();

// Update marks
student2.marks1 = 100;

// Display updated total
console.log(`Updated Total: ${student2.calculateTotal()}`);

