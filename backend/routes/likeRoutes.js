import express from "express";
import { verify } from "../middlewares/verifyToken.js";
import { giveLike } from "../controllers/likeController.js";

const router=express.Router();

router.post("/giveLike",verify, giveLike);

export default router;