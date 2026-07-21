let studentName: string = "Rahul";
let marks: number = 92;
let passed: boolean = true;

function getResult(name: string, score: number): string {
    return `${name} scored ${score} marks`;
}

let subjects: string[] = [
    "Maths",
    "Physics",
    "Chemistry"
];

const result: string = getResult(studentName, marks);

console.log(result);
console.log(`Subjects: ${subjects.join(", ")}`);
console.log(`Passed? ${passed ? "Yes" : "No"}`);