import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  user_id: { type: String, required: true, unique: true },
  username: { type: String, required: true, unique: true },
  emailid: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  profile_picture_url: { type: String },
  created_at: { type: Date, default: Date.now },

  // Followers & following stored as arrays of user IDs
  followers: [{ type: String }],
  following: [{ type: String }]
});

export default mongoose.model("User", userSchema);
