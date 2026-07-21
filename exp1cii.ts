let courseName: string = "TypeScript";
let duration: number = 30;
let isPopular: boolean = true;

function getCourseInfo(name: string, days: number): string {
    return `${name} course duration is ${days} days`;
}

let topics: string[] = [
    "Variables",
    "Functions",
    "Arrays",
    "Classes"
];

const info: string = getCourseInfo(courseName, duration);

console.log(info);
console.log(`Topics: ${topics.join(", ")}`);
console.log(`Popular Course? ${isPopular ? "Yes" : "No"}`);