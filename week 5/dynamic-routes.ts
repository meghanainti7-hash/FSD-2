import express, { Request, Response } from "express";

const app = express();
const PORT = 3001;

app.get("/user/:name", (req: Request, res: Response) => {
    const name = String(req.params.name);

    res.send(`Hello ${name}! Welcome to your profile.`);
});

app.get("/student/:id", (req: Request, res: Response) => {
    const id = String(req.params.id);

    res.send(`Student ID is: ${id}`);
});

app.get("/search", (req: Request, res: Response) => {
    const name = String(req.query.name ?? "");
    const course = String(req.query.course ?? "");

    res.send(`
        <h1>Search Results</h1>
        <p>Name: ${name}</p>
        <p>Course: ${course}</p>
    `);
});

app.listen(PORT, () => {
    console.log(`Dynamic server running at http://localhost:${PORT}`);
});