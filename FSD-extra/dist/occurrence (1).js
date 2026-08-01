"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let arr = [1, 2, 2, 3, 3, 3];
let count = {};
for (let num of arr) {
    count[num] = (count[num] || 0) + 1;
}
console.log(count);
