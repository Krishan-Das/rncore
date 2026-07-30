import express from "express";
import config from "./config/config.js";
import cors from "cors"
import todoRouter from "./routes/todo.routes.js";
const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(cors({
  origin: config.CLIENT_URL
}))


// Todo API routes
app.use('/api/v1/todos', todoRouter);

export default app;