import{loginHandler} from "../../service/auth-service"
import { useAuth } from "../../context/auth-context"
import {useNavigate} from "react-router-dom";

export const AuthLogin =()=>{

  const {username,password,authDispatch} = useAuth();

  const navigate = useNavigate();

  const handlePasswordChange =(e)=>{
    authDispatch({
      action:"PASSWORD",
      payload:e.target.value,
    })
  }

   const handleUserNameChange =(e)=>{
    authDispatch({
      action:"USERNAME",
      payload: e.target.value,
    })
   }

  const handleLogin =(e)=>{
    e.preventDefault();

    const token = loginHandler(username,password);
    if(token){
      navigate("/");
    }

    authDispatch({
      action: "TOKEN",
      payload: token,
    })

    authDispatch({
      action:"CLEAR_CREDENTIALS",
    })


  }



    return(
          <>

    <div className="flex min-h-full flex-col justify-center items-center px-6 py-12 lg:px-8 ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm mt-10">
        <img src="../../../public/assets/logo.png" alt="Your Company" className="mx-auto h-10 w-auto" />
    <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-white">Sign in to your account</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form action="#" method="POST" className="space-y-6">
      <div>
        <label htmlFor="email" className="block text-sm/6 font-medium text-gray-100">Email address</label>
        <div className="mt-2">
          <input value ={username} onChange ={handleUserNameChange}id="email" type="email" name="email" required autoComplete="email" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-sm/6 font-medium text-gray-100">Password</label>
          
        </div>
        <div className="mt-2">
          <input value={password} onChange={handlePasswordChange} id="password" type="password" name="password" required autoComplete="current-password" className="block w-full rounded-md bg-white/5 px-3 py-1.5 text-base text-white outline-1 -outline-offset-1 outline-white/10 placeholder:text-gray-500 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-500 sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" onClick={handleLogin} className="flex w-full justify-center rounded-md bg-indigo-500 px-3 py-1.5 text-sm/6 font-semibold text-white hover:bg-indigo-400 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500">Sign in</button>
      </div>
    </form>

    
  </div>
</div>


        </>
    )
};