class Student {

    readonly studentId: number;

    constructor(id: number) {
        this.studentId = id;
    }

    display(): void {
        console.log("Student ID:", this.studentId);
    }
}

let student = new Student(101);

student.display();