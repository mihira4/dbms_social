import express from "express";
import User from "../models/userModel.js";
import { verify } from "../middlewares/verifyToken.js";
import { login, register} from "../controllers/auth.js";

const router=express.Router();

router.post("/register", register);
router.post("/login",login);

export default router;