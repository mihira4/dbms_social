import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import userRoutes from "./routes/userRoutes.js";

dotenv.config();

const app = express();
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch(err => console.error(err));

app.use("/auth", userRoutes);

app.listen(5050, () => console.log("Server running on port 5050"));
