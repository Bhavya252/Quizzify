import {Link} from 'react-router-dom'
import { useAuth } from '../../context/auth-context';
import { use } from 'react';

export const Navbar = ()=>{
  
const {token , authDispatch} =useAuth();

  const handleClick =() =>{
    if (token){
      localStorage.clear();
      authDispatch(
        {
          action:"TOKEN",
          payload:null,
        }
      )
    }
    
  }
    return(
       <>
       
<nav className="bg-zinc-950 border-purple-700 fixed w-full z-20 top-0 start-0 border-b border-default">
  <div className="max-w-screen flex flex-wrap items-center justify-between mx-auto p-4">
    <Link to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
        <img src="../../public/assets/logo.png" className="h-7" alt="Quizify Logo" />
        <span className="  text-purple-400 tracking-wideself-center text-xl text-heading font-semibold whitespace-nowrap">Quizify</span>
    </Link>
    
    <div className="hidden w-full md:block md:w-auto" id="navbar-default">
      <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
        <li>
          <Link to="/" className="block py-2 px-3 hover:text-purple-400 transition  text-gray-300 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0" aria-current="page">Home</Link>
        </li>
        <li>
          <Link to="/auth/login" onClick ={handleClick} className="block py-2 px-3 hover:text-purple-400 transition text-gray-300 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">{
            token ? "LogOut" : "LogIn"
          } </Link>
        </li>
        <li>
          <Link to="/result" className="block py-2 px-3 hover:text-purple-400 transition text-gray-300 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent">Result</Link>
        </li>
       
       
      </ul>
    </div>
  </div>
</nav>

       </>
    )
}