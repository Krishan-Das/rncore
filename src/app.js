import express from "express";
import config from "./config/config.js";
import cors from "cors"

import todoRouter from "./routes/v1/todo.routes.js";
import v2AuthRoutes from "./routes/v2/auth.routes.js"
import v2TodoRoutes from "./routes/v2/todo.routes.js"

const app = express();

// --- Middlewares ---
app.use(express.json());
app.use(cors())


// Todo API routes
app.use('/api/v1/todos', todoRouter);

app.use("/api/v2/auth", v2AuthRoutes);
app.use("/api/v2", v2TodoRoutes);


export default app;