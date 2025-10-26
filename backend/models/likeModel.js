import mongoose from "mongoose";

const likeSchema = new mongoose.Schema({
  user_id: { type: String, required: true },
  post_id: { type: String, required:true },
  comment_number: { type: String }
});

export default mongoose.model("Like", likeSchema);
