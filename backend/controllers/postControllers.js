import Post from "../models/postModel.js";
import dotenv from 'dotenv'; 
dotenv.config(); 

const key=process.env.JWT_SECRET;

//POST TEXT
export const postText=async (req,resp)=>{
    //console.log(req.body);
    try{
        const {user_id,
            content_text}=req.body;
        if (!user_id) {
            return resp.status(400).json({ message: 'Some error in sending user_id to post text controller' });
        }

        const newPost=new Post({
            user_id,
            post_type:"text",
            content_text,
        });

        newPost.post_id=newPost._id.toString();

        const savePost=await newPost.save();
        resp.status(201).json(savePost);
    }
    catch(error){
        resp.status(500).json({"error in postControllerText":error.message});
    }
};

//POST MEDIA-PHOTOS
export const postPhoto=async (req,resp)=>{
    console.log(req.body);
    try{
        const {user_id,
            media_url,
        caption}=req.body;
        
        console.log("printing the image url",media_url);

        if (!user_id) {
            return resp.status(400).json({ message: 'Some error in sending user_id to post media controller' });
        }

        const newPost=new Post({
            user_id,
            post_type:"media",
            media_url,
            caption
        });

        newPost.post_id=newPost._id.toString();

        const savePost=await newPost.save();
        resp.status(201).json(savePost);
    }
    catch(error){
        resp.status(500).json({"error in postControllerMedia":error.message});
    }
};