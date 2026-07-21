let studentName: string = "Mounika";
let marks: number = 92;
let passed: boolean = true;

console.log("Type of studentName: " + typeof studentName);
console.log("Type of marks: " + typeof marks);
console.log("Type of passed: " + typeof passed);

function studentDetails(name: string, marks: number, passed: boolean): void {
    console.log("Student Name: " + name);
    console.log("Marks: " + marks);
    console.log("Result: " + (passed ? "Pass" : "Fail"));
}

studentDetails(studentName, marks, passed);
