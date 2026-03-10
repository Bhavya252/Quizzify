import{useContext,createContext , useReducer} from "react";
import { authReducer } from "../reducers/auth-reducer.js";

const initialValue ={
    username:"",
    password:"",
    token:"",
}

const AuthContext = createContext();

export const AuthProvider = ({children})=>{

    const [{username , password,token},authDispatch] = useReducer(authReducer,initialValue);

    return(
         <AuthContext.Provider value={{username , password,token,authDispatch}}>
        {children}
        </AuthContext.Provider>
    )

   
}

const useAuth =()=> useContext(AuthContext);

export {useAuth };
    