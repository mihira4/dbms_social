import mongoose from "mongoose";

const commentSchema = new mongoose.Schema({
  comment_number: { type: String, default: 0},
  post_id: { type: String, required: true },
  user_id: { type: String, required: true },
  comment_text: { type: String, required: true },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Comment", commentSchema);
