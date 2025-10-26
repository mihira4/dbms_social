import mongoose from "mongoose";

const postSchema = new mongoose.Schema({
  post_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  post_type: { type: String, enum: ["text", "media"], default: "text" },
  created_at: { type: Date, default: Date.now },

  // For text or media posts
  content_text: { type: String },
  media_url: { type: String },
  caption: { type: String }
});

export default mongoose.model("Post", postSchema);
