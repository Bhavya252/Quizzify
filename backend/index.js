import express from "express";
import cors from "cors";
import dotenv from 'dotenv';
import quizRouter from "./router/quizRouter.js";
import routeNotFound from "./middleware/routeNotFound.js";
import{loginRouter,signupRouter} from "./router/authRouter.js";

dotenv.config();

const app = express();
const port = 3000;

app.use(cors(
    {
        origin : true,
        credentials : true
    }
));
app.use(express.json());

app.use('/quizzes',quizRouter);
app.use('/auth/login',loginRouter);
app.use('/auth/signup',signupRouter);
app.use(routeNotFound);




app.listen ( process.env.PORT || port, () => {
    console.log('Server is running on port ' + (process.env.PORT || port));
});