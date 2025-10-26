import Post from "../models/postModel.js";
import Comment from "../models/commentModel.js";
import dotenv from 'dotenv'; 
dotenv.config(); 

export const makeComment = async (req, resp) => {
    try {
        const {user_id, comment_text, post_id} = req.body;
        
        const currPost = await Post.findOne({post_id : post_id});
        console.log(currPost);
        const commentsMade = currPost.commentsTotal;
        console.log(commentsMade);
        
        const newComment = new Comment({
            user_id,
            post_id,
            comment_text,
            comment_number: commentsMade + 1
        })

        const savedComment = await newComment.save();
        await Post.updateOne(
            { post_id: post_id },
            { $inc: { commentsTotal: 1 } }
          );
          
        resp.status(201).json(savedComment);
    }
    catch (error) {
        resp.status(500).json({"error in makeComment":error.message});
        console.log(error);
    }
}
