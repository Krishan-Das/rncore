import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

import todoRouter from "./routes/v1/todo.routes.js";
import v2AuthRoutes from "./routes/v2/auth.routes.js";
import v2TodoRoutes from "./routes/v2/todo.routes.js";
import userRouter from "./routes/v1/user.routes.js";

const app = express();


app.set("trust proxy", 1);
// --- Middlewares ---
app.use(express.json());
app.use(cookieParser());


// --- V1 Public API ---
app.use("/api/v1", cors());

// --- V2 Auth API (Cookie based) ---
app.use("/api/v2/auth", cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
  v2AuthRoutes
);

// --- V2 Developer API (API Key based) ---
app.use("/api/v2", cors(), v2TodoRoutes );

// --- V1 Routes ---
app.use("/api/v1/todos", todoRouter );
app.use("/api/v1/users", userRouter );


export default app;