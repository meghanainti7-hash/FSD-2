class Student {

    public studentName: string;

    private marks: number;
    private password: string;

    protected attendance: number = 90;

    constructor(name: string, marks: number, password: string) {
        this.studentName = name;
        this.marks = marks;
        this.password = password;
    }

    public showResult(): void {
        console.log(`${this.studentName}'s Marks: ${this.marks}`);
    }

    private verifyPassword(pass: string): boolean {
        return this.password === pass;
    }
}

class CollegeStudent extends Student {

    public showAttendance(): void {
        console.log(`Attendance: ${this.attendance}%`);
    }
}

// Execution
const student = new Student("Rahul", 95, "abc123");

console.log(`Student Name: ${student.studentName}`);
student.showResult();

const collegeStudent = new CollegeStudent("Rahul", 95, "abc123");
collegeStudent.showAttendance();