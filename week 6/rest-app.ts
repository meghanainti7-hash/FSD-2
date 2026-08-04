import express, { Request, Response } from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

interface Task {
    id: number;
    title: string;
}

let tasks: Task[] = [
    {
        id: 1,
        title: "Learn Express"
    },
    {
        id: 2,
        title: "Master REST APIs"
    }
];

// GET
app.get("/tasks", (req: Request, res: Response) => {
    res.json(tasks);
});

// POST
app.post("/tasks", (req: Request, res: Response) => {
    const newTask: Task = {
        id: req.body.id !== undefined
            ? Number(req.body.id)
            : tasks.length + 1,
        title: String(req.body.title)
    };

    tasks.push(newTask);

    res.status(201).json(newTask);
});

// PUT
app.put("/tasks/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const task = tasks.find((item: Task) => item.id === id);

    if (!task) {
        res.status(404).json({
            error: "Task not found"
        });
        return;
    }

    task.title = String(req.body.title);

    res.json({
        message: "Task updated successfully",
        task: task
    });
});

// DELETE
app.delete("/tasks/:id", (req: Request, res: Response) => {
    const id = Number(req.params.id);

    const taskExists = tasks.some((item: Task) => item.id === id);

    if (!taskExists) {
        res.status(404).json({
            error: "Task not found"
        });
        return;
    }

    tasks = tasks.filter((item: Task) => item.id !== id);

    res.json({
        message: `Task ${id} deleted`,
        remainingTasks: tasks
    });
});

app.listen(PORT, () => {
    console.log(`REST API Server running at http://localhost:${PORT}`);
});