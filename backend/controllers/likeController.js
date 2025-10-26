import Like from "../models/likeModel.js"
import dotenv from 'dotenv'; 
dotenv.config(); 

export const giveLike = async (req, resp) => {
    try {
        const {user_id, comment_number, post_id} = req.body;
        
        const newLike = new Like({
            user_id,
            post_id,
            comment_number
        });
        
        const savedLike = await newLike.save();

        resp.status(201).json(savedLike);
    }
    catch {
        resp.status(500).json({"error in makeComment":error.message});
    }
}
