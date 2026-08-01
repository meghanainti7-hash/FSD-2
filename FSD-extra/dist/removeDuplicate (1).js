"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let str = "programming";
let result = "";
for (let ch of str) {
    if (!result.includes(ch)) {
        result += ch;
    }
}
console.log(result);
