const express = require("express");

const app = express();
const PORT = 3000;

// ===============================
// 1. BUILT-IN MIDDLEWARE
// ===============================
// Allows Express to read JSON data
// sent in POST/PUT requests.
app.use(express.json());


// ===============================
// 2. CUSTOM LOGGING MIDDLEWARE
// ===============================
// This runs for every request.
app.use((req, res, next) => {
    const timestamp = new Date().toLocaleString();

    console.log(
        `[${timestamp}] Incoming Request: ${req.method} to ${req.url}`
    );

    // Move to the next middleware/route
    next();
});


// ===============================
// 3. CUSTOM SECURITY MIDDLEWARE
// ===============================
// Checks whether User-Agent exists.
app.use((req, res, next) => {
    const userAgent = req.get("User-Agent");

    if (!userAgent) {
        return res.status(400).json({
            error: "Browser Identification missing"
        });
    }

    next();
});


// ===============================
// 4. HOME ROUTE
// ===============================
app.get("/", (req, res) => {
    res.send("Welcome to my Express Server!");
});


// ===============================
// 5. ABOUT ROUTE
// ===============================
app.get("/about", (req, res) => {
    res.send("This is the About page.");
});


// ===============================
// 6. STUDENTS ROUTE
// ===============================
app.get("/students", (req, res) => {
    res.json([
        {
            id: 1,
            name: "Alice"
        },
        {
            id: 2,
            name: "Bob"
        }
    ]);
});


// ===============================
// 7. START SERVER
// ===============================
app.listen(PORT, () => {
    console.log("--------------------------------");
    console.log(`REST API Server running at http://localhost:${PORT}`);
    console.log("Listening for requests...");
    console.log("--------------------------------");
});