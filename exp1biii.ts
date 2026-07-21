let item: any = 100;

item = "Laptop";
item = true;

let input: unknown = "Computer";

if (typeof input === "string") {
    console.log("Word Length: " + input.length);
}

function displayStatus(status: string): void {
    console.log("Status: " + status);
}

displayStatus("Order Delivered");