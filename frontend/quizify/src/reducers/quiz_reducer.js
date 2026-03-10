export const quizReducer =(state , {action , payload})=>{
    switch(action){


        case "NEXT":
        return{
            ...state,
            index: state.index + 1,
            selectedOption: null,
            
        }

        case "SELECTED_OPTION":
            return{
                ...state,
                selectedOption: payload.id,
                score: payload.isCorrect ? state.score + 5 : state.score,
            }

        case "SUBMIT":
            return{
                ...state,
                selectedOption:null,
            }

        case "INITIAL":
            return{
                ...state,
                index: payload.currentIndex,
                score: payload.currentScore,
                selectedOption: payload.currentOption === "null" ? null : payload.currentOption,
                quizCategory: payload.currentCategory,
                quizData: payload.currentQuiz

            }

        case "QUIZ_CATEGORY":
            return{
                ...state,
                quizCategory: payload,
            }
        case "SET_QUIZ" :
            return{
                ...state,
                quizData: payload,
            }

        case "QUIT":
            return{
                ...state,
                index:0,
                selectedOption:null,
            }

        case "RESET":
            return {
                ...state,
                index:0,
                score:0,
                selectedOption:null,
                quizCategory:"",
                quizData:[],
            }

        default:
            return state;
    }
    
}