import jwt from "jsonwebtoken";

const authVerify = (req,res,next)=>{
    const token = req.headers.authorization;
    try{
        const verify = jwt.verify(token, process.env.JWT_SECRET);
        req.user={
            id:verify.id,
            email:verify.email,
            name:verify.name,
            password:verify.password
        }
        return next();

    }
    catch(error){
        console.error("Error verifying token:", error);
        return res.status(401).json({message:"Unauthorized"});
    }
    
}
 export default authVerify;