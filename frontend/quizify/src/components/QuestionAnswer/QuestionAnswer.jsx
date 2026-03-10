import { useQuiz } from "../../context/quiz-context";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const QuestionAnswer = ({ quizData }) => {
  const { category, quiz } = quizData[0];
  const { index, score, selectedOption, quizCategory, quizDispatch } = useQuiz();
  const navigate = useNavigate();

  const handleQuit=()=>{
    quizDispatch({
      action: "QUIT",
    })
    navigate('/result');
  }
   const handleSelectClick =(id,isCorrect)=>{

    quizDispatch({
      action: "SELECTED_OPTION",
      payload: { id, isCorrect },
    })
   }

    const handleClickNext =()=>{
        localStorage.setItem("index", index+1);
        if(index !== quiz.length-1){
            quizDispatch({
                action:"NEXT",
            })
        }
        else{
            quizDispatch({
                action:"SUBMIT",
            })

            navigate('/result');
        }
    }

     useEffect(() => {
        localStorage.setItem("option", selectedOption);
        localStorage.setItem("score", score);
    }, [selectedOption, score,index])

  return (
    <>
      <div className="card w-96 bg-base-100 shadow-sm bg-zinc-900 border-purple-500 border">
        <div className="card-body display flex flex-col gap-4 items-center justify-center">
          <h2>{category}</h2>
          <span className="block "> question: {index+1}/{quiz.length}</span>
          <span> Question : {quiz[index]?.question}</span>

          <div className="card-actions justify-end flex flex-col gap-3">
            {quiz[index]?.options.map(({ option, isCorrect, id }) => (
              <button
                key={id}
                onClick={ ()=>handleSelectClick(id,isCorrect)}
                className  = {`btn btn-primary cursor  border border-purple-50 px-6 py-3 rounded-md w-full ${
                  selectedOption === id
      ? isCorrect
        ? "bg-green-500 text-white"
        : "bg-red-500 text-white"
      : isCorrect && selectedOption !== null
      ? "bg-green-500 text-white"
      : "hover:bg-purple-200"} `} disabled={selectedOption !== null}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="inline p-4">
            <button onClick={handleQuit}
            className="btn btn-primary cursor hover:bg-purple-200 border border-purple-50 px-4 py-2 rounded-md">
              Quit
            </button>
            <button  onClick ={handleClickNext}className="btn btn-primary cursor hover:bg-purple-200 border border-purple-50 px-4 py-2 rounded-md">
              {index ===quiz.length-1 ? "Submit": "Next"}
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
