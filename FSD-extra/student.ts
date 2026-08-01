class Student {

    constructor(
        public id: number,
        public name: string,
        public marks: number
    ) { }

    display(): void {
        console.log("ID:", this.id);
        console.log("Name:", this.name);
        console.log("Marks:", this.marks);
    }
}

let student = new Student(101, "Mouni", 95);

student.display();