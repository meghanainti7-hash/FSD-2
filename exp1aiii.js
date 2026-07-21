"use strict";
let productName = "Laptop";
let price = 65000;
let inStock = false;
console.log("Type of productName: " + typeof productName);
console.log("Type of price: " + typeof price);
console.log("Type of inStock: " + typeof inStock);
function productDetails(name, price, stock) {
    console.log("Product: " + name);
    console.log("Price: " + price);
    console.log("Availability: " + (stock ? "In Stock" : "Out of Stock"));
}
productDetails(productName, price, inStock);
