import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import User from "./models/userModel.js";
import Post from "./models/postModel.js";
import Comment from "./models/commentModel.js";
import Like from "./models/likeModel.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.get("/", (req, res) => {
  res.send("ER Diagram Schema API Running");
});

app.listen(3000, () => console.log("Server running on port 3000"));
