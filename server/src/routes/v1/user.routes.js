import { Router } from "express";
import * as userController from "../../controllers/v1/user.controller.js";

const userRouter = Router();


// Get all users
userRouter.get("/", userController.getUsers);

// Get single user
userRouter.get("/:id", userController.getUserById);


export default userRouter;