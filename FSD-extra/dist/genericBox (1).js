"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Box {
    constructor(value) {
        this.value = value;
    }
    display() {
        console.log(this.value);
    }
}
let numberBox = new Box(100);
let stringBox = new Box("Hello TypeScript");
numberBox.display();
stringBox.display();
