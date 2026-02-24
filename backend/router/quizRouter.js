import express from "express";
import quizzes from "../db/quizzes.js";
import authVerify from "../middleware/authVerify.js";


const quizRouter = express.Router();
quizRouter.route('/')
    .get( authVerify, (req,res)=>{
        res.json(quizzes.data)
    }) 

export default quizRouter;