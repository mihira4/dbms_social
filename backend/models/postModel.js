import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post_type: { type: String, enum: ["text", "media"], default: "text" },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Post", postSchema);
