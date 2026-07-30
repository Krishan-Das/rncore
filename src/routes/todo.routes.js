import { Router } from "express";
import * as todoController from "../controllers/todo.controller.js"
const todoRouter = Router();


// Todo CRUD routes
todoRouter.post('/', todoController.createTodo);
todoRouter.get('/', todoController.getTodos);
todoRouter.patch('/:id', todoController.updateTodo);
todoRouter.delete('/:id', todoController.deleteTodo);

export default todoRouter;