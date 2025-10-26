import express from "express";
import { verify } from "../middlewares/verifyToken.js";
import { postText, postPhoto } from "../controllers/postControllers.js";
import { upload, cloudinaryFile } from "../middlewares/upload.js";

const router=express.Router();

router.post("/text",verify, postText);
router.post("/photo",verify,upload,cloudinaryFile,postPhoto);

export default router;