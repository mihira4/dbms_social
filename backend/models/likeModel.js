import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  post_id: { type: mongoose.Schema.Types.ObjectId, ref: "Post" },
  comment_id: { type: mongoose.Schema.Types.ObjectId, ref: "Comment" },
  created_at: { type: Date, default: Date.now }
});

export default mongoose.model("Like", likeSchema);
