const express = require("express");

const app = express();

const PORT = 3000;

// Home Route
app.get("/", (req, res) => {
    console.log("Home route accessed");
    res.send(`
        <h1>Welcome SVECW!</h1>
        <p>You have reached the Home Page.</p>
    `);
});

// About Route
app.get("/about", (req, res) => {
    console.log("About route accessed");
    res.send("This server was built for learning ExpressJS routing.");
});

// API Status Route
app.get("/api/status", (req, res) => {
    console.log("API status route accessed");

    res.json({
        active: true,
        version: "1.0.0",
        message: "The server is healthy and responding"
    });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});