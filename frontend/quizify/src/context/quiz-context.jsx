import { createContext, useReducer, useContext } from "react";
import { quizReducer } from "../reducers/quiz_reducer.js";

const initialValue ={
    index:0,
    score:0,
    quizData:[],
    selectedOption:"",
    quizCategory:"",
}

const QuizContext = createContext();
export const QuizProvider = ({ children }) => {

    const [{index  , score, quizData, selectedOption, quizCategory}, quizDispatch] = useReducer(quizReducer, initialValue);
    return (
        <QuizContext.Provider value={{index, score, quizData, selectedOption, quizCategory, quizDispatch}}>   
        {children}
        </QuizContext.Provider>
    )
}

const useQuiz = () => useContext(QuizContext);

export { useQuiz };