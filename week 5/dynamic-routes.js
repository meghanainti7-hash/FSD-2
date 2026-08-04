const express = require("express");

const app = express();

const PORT = 3000;

// Route Parameter
app.get("/user/:name", (req, res) => {
    const name = req.params.name;

    console.log(`User route accessed for: ${name}`);

    res.send(`Hello ${name}! Welcome to your profile.`);
});

// Route Parameter with ID
app.get("/student/:id", (req, res) => {
    const id = req.params.id;

    console.log(`Student ID accessed: ${id}`);

    res.send(`Student ID is: ${id}`);
});

// Query Parameters
app.get("/search", (req, res) => {
    const name = req.query.name;
    const course = req.query.course;

    console.log(`Search request: name=${name}, course=${course}`);

    res.send(`
        <h1>Search Results</h1>
        <p>Name: ${name}</p>
        <p>Course: ${course}</p>
    `);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});