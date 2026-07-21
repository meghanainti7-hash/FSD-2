let data: any = 500;

data = "TypeScript";
data = false;

let value: unknown = "Programming";

if (typeof value === "string") {
    console.log("Characters: " + value.length);
}

function showMessage(msg: string): void {
    console.log("Message: " + msg);
}

showMessage("Learning TypeScript");