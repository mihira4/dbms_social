import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  like_id: { type: String, required: true, unique: true },
  user_id: { type: String, required: true },
  post_id: { type: String, required:true },
  comment_id: { type: String },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Like", likeSchema);
