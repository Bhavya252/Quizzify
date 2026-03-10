export const authReducer =(state ,{action,payload})=>{

    switch (action) {
        case "USERNAME":
            return {
                ...state,
                username:payload,
            }
            
            break;

        case "PASSWORD":
            return{
                ...state,
                password:payload,
            }

            break;

        case "TOKEN":
            return {
                ...state,
                token:payload,
            }
            break;
        case "CLEAR_CREDENTIALS":
            return{
                ...state,
                username:"",
                password:"",
            }    

        
    
        default:
            return state;
    }

}