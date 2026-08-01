"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "programming";
let frequency = {};
for (let ch of str) {
    frequency[ch] = (frequency[ch] || 0) + 1;
}
console.log(frequency);
