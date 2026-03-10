import {AuthLogin,Navbar} from "../../components/index";
import {Fragment} from "react";

export const LogIn =()=>{
    return(
        <>

        <div className = "min-h-screen flex flex-col">
      
        <div className="flex min-h-full flex-col justify-center items-center  ">

        <AuthLogin/>
        </div>
        </div>
       
        </>
    )
}