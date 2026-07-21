let productName: string = "Laptop";
let price: number = 65000;
let inStock: boolean = false;

console.log("Type of productName: " + typeof productName);
console.log("Type of price: " + typeof price);
console.log("Type of inStock: " + typeof inStock);

function productDetails(name: string, price: number, stock: boolean): void {
    console.log("Product: " + name);
    console.log("Price: " + price);
    console.log("Availability: " + (stock ? "In Stock" : "Out of Stock"));
}

productDetails(productName, price, inStock);