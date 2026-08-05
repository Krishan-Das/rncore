import { Router } from "express";
import * as todoController from "../../controllers/todo.controller.js"
const todoRouter = Router();


// Todo CRUD routes
todoRouter.get('/', todoController.getTodos);
// todoRouter.post('/', todoController.createTodo);
// todoRouter.patch('/:id', todoController.updateTodo);
// todoRouter.delete('/:id', todoController.deleteTodo);

todoRouter.post("/", (req, res) => {
  res.status(405).json({
    success: false,
    message: "V1 API is read-only. Use V2 for CRUD operations.",
  });
});

todoRouter.patch("/:id", (req, res) => {
  res.status(405).json({
    success: false,
    message: "V1 API is read-only. Use V2 for CRUD operations.",
  });
});

todoRouter.delete("/:id", (req, res) => {
  res.status(405).json({
    success: false,
    message: "V1 API is read-only. Use V2 for CRUD operations.",
  });
});

export default todoRouter;