import express from "express";
import { register, login, logout, getMe } from "../../controllers/v2/auth.controller.js";
import authenticated from "../../middlewares/authenticated.middleware.js"

const router = express.Router();


router.post("/register", register);
router.post("/login", login);
router.post('/logout', logout)

router.get("/me", authenticated , getMe);

export default router;