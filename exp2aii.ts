function student(name: string): string {
    return `Student Name: ${name}`;
}

function college(collegeName: string = "SVECW"): string {
    return `College: ${collegeName}`;
}

function sendEmail(email: string, subject?: string): void {
    console.log(`Sending Email to ${email}`);
    if (subject) {
        console.log(`Subject: ${subject}`);
    }
}

function averageMarks(...marks: number[]): number {
    const total = marks.reduce((sum, mark) => sum + mark, 0);
    return total / marks.length;
}

console.log(student("Anjali"));
console.log(college());
console.log(college("JNTUH"));

sendEmail("student@gmail.com");
sendEmail("student@gmail.com", "Exam Schedule");

const avg = averageMarks(80, 90, 85, 95);
console.log(`Average Marks: ${avg}`);