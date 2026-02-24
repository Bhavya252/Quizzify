import express from "express"
import jwt from "jsonwebtoken"
import {v4 as uuid} from "uuid"
import user from "../db/user.js"


const signupHandler =(req,res)=>{
    console.log("Signup request received");
    const {name,email,password} = req.body;
    const existingUser = user.users.find((u)=>u.email === email);
    if(existingUser){
        res.status(422).json({message: "User already exists with this email"})
    }
    else{
        const newUser ={
            id:uuid(),
            name:name,
            email:email,
            password:password
        }
        user.users = [...user.users,newUser];
        const token = jwt.sign(
            {id:newUser.id,email:newUser.email},
            process.env.JWT_SECRET,
            {expiresIn:"1h"}
        )
        res.status(201).json({
            token:token,
            user: newUser,
            message:"User registered successfully"});
    }
}

 const loginHandler = (req,res)=>{
    console.log("Login request received");
    const {email,password} = req.body;
    const existingUser = user.users.find((u)=>u.email === email && u.password === password);
    if(existingUser){
        const jwtSecret = process.env.JWT_SECRET ;
        const token = jwt.sign(
            {id:existingUser.id,email:existingUser.email},
            jwtSecret,
            {expiresIn:"1h"}
        );
        console.log(existingUser);
        res.json({
            token:token,
            id:existingUser.id,
            email:existingUser.email,
            name:existingUser.name,

            message:"Login succesful"
        }
            )
    }
    else{
        res.status(401).json({message:"Invalid email or password"})
    }
};

export {loginHandler , signupHandler};