import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
    res.json({
        message: "Welcome to our API!",
        status: "Active",
        timestamp: new Date()
    });
});

app.get("/students", (req: Request, res: Response) => {
    res.json([
        {
            id: 101,
            name: "Alice",
            course: "MERN Stack"
        },
        {
            id: 102,
            name: "Bob",
            course: "Data Science"
        },
        {
            id: 103,
            name: "Charlie",
            course: "UI/UX"
        }
    ]);
});

app.get("/product/:id", (req: Request, res: Response) => {
    const productId = String(req.params.id);

    res.json({
        requestedId: productId,
        category: "Electronics",
        inStock: true,
        tags: ["gadget", "new-arrival"]
    });
});

app.listen(PORT, () => {
    console.log(`JSON Server is running at http://localhost:${PORT}`);
});