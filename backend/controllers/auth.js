import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/userModel.js";
import dotenv from 'dotenv'; 
dotenv.config(); 

const key=process.env.JWT_SECRET;

//REGISTER
export const register=async (req,resp)=>{
    //console.log(req.body);
    try{
        const{
            username,
            emailid,
            password,}=req.body;
        if (!emailid || emailid.trim() === '') {
            return resp.status(400).json({ message: 'Email is required' });
        }
        const existingUser = await User.findOne({ emailid });
        if (existingUser) {
        return resp.status(400).json({ message: "Email already registered" });}

        const existingName = await User.findOne({ username });
        if (existingName) {
        return resp.status(400).json({ message: "Username taken, try a different one" });}
        
        const salt=await bcrypt.genSalt();
        const passwordF=await bcrypt.hash(password, salt);
        const newUser=new User({
            username,
            emailid,
            password:passwordF,
        });

        newUser.user_id=newUser._id.toString();

        const saveUser=await newUser.save();
        resp.status(201).json(saveUser);
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
};

//LOGIN
export const login=async(req,resp)=>{
    try{
        const {emailid,password}=req.body;
        const currentUser=await User.findOne({emailid:emailid});
        if(!currentUser){
            return resp.status(404).json({message:"User not found"});
        }
        const boolean=await bcrypt.compare(password,currentUser.password);
        if(!boolean){
            return resp.status(401).json({message:"Invalid credentials. Please check again!"});
        }
        const token=jwt.sign({username:currentUser.username, emailid:emailid},key,{expiresIn:"6h"});
        //delete currentUser.password;//this doesn't work

        resp.json({success: true,token});
    }
    catch(error){
        resp.status(500).json({"error":error.message});
    }
};