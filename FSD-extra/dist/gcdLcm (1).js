"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let a = 12;
let b = 18;
let num1 = a;
let num2 = b;
// Find GCD using Euclidean Algorithm
while (num2 !== 0) {
    let temp = num2;
    num2 = num1 % num2;
    num1 = temp;
}
let gcd = num1;
let lcm = (a * b) / gcd;
console.log("First Number =", a);
console.log("Second Number =", b);
console.log("GCD =", gcd);
console.log("LCM =", lcm);
