import express from "express";
import {
  getTodos,
  createTodo,
  updateTodo,
  deleteTodo
} from "../../controllers/v2/todo.controller.js";

import v2ApiKey from "../../middlewares/v2ApiKey.middleware.js"

const router = express.Router();

router.get("/:apiKey/todos", v2ApiKey, getTodos);
router.post("/:apiKey/todos", v2ApiKey, createTodo);
router.patch("/:apiKey/todos/:id", v2ApiKey, updateTodo);
router.delete("/:apiKey/todos/:id", v2ApiKey, deleteTodo);


export default router;