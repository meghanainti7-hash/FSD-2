"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let num = 18;
let isPrime = true;
if (num <= 1) {
    isPrime = false;
}
else {
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log(isPrime ? "Prime Number" : "Not Prime Number");
