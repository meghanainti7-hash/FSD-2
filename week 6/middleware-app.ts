import express, {
    Request,
    Response,
    NextFunction
} from "express";

const app = express();
const PORT = 3000;

app.use(express.json());

// Logging middleware
app.use(
    (req: Request, res: Response, next: NextFunction) => {
        const timestamp = new Date().toLocaleString();

        console.log(
            `[${timestamp}] ${req.method} ${req.url}`
        );

        next();
    }
);

// Security middleware
app.use(
    (req: Request, res: Response, next: NextFunction) => {
        const userAgent = req.get("User-Agent");

        if (!userAgent) {
            res.status(400).json({
                error: "Browser Identification missing"
            });
            return;
        }

        next();
    }
);

// Home
app.get("/", (req: Request, res: Response) => {
    res.send("Welcome to my Express Server!");
});

// About
app.get("/about", (req: Request, res: Response) => {
    res.send("This is the About page.");
});

// Students
app.get("/students", (req: Request, res: Response) => {
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

app.listen(PORT, () => {
    console.log(
        `Middleware server running at http://localhost:${PORT}`
    );
});