import express from "express";
import { verify } from "../middlewares/verifyToken.js";
import { makeComment } from "../controllers/commentController.js";

const router=express.Router();

router.post("/makeComment",verify, makeComment);

export default router;