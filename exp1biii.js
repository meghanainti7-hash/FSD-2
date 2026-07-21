"use strict";
let item = 100;
item = "Laptop";
item = true;
let input = "Computer";
if (typeof input === "string") {
    console.log("Word Length: " + input.length);
}
function displayStatus(status) {
    console.log("Status: " + status);
}
displayStatus("Order Delivered");
