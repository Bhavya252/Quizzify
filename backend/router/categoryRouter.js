import express from "express";
import quizzes from "../db/quizzes.js";

const categoryRouter = express.Router();
categoryRouter.get('/',(req,res)=>{
    res.json(quizzes.data);
})

export default categoryRouter;