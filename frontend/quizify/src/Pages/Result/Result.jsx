import{ useQuiz } from "../../context/quiz-context";
import { useNavigate } from "react-router-dom";

export const Result =()=>{
  const { score ,quizDispatch} = useQuiz();
  const navigate = useNavigate();

  const playAgainClick =()=>{


    localStorage.removeItem("index");
    localStorage.removeItem("score");
    localStorage.removeItem("selectedOption");
    localStorage.removeItem("quiz");

    quizDispatch({
      action: "RESET",
    })
    navigate('/');

  }
  return (
    <>
    <div className="min-h-screen flex items-center justify-center bg-zinc-950">

  <div className="bg-zinc-900 border border-purple-500 rounded-xl p-10 shadow-lg w-[420px] text-center">

    <h1 className="text-3xl font-bold text-white mb-6">
      🎉 Quiz Completed
    </h1>

    <p className="text-xl text-purple-300 mb-4">
      Your Score
    </p>

    <p className="text-4xl font-bold text-green-400 mb-8">
      {score}  🏆
    </p>

    <button
      onClick={playAgainClick}
      className="w-full border border-purple-400 px-6 py-3 rounded-lg hover:bg-purple-200 transition"
    >
      Play Again 🔄
    </button>

  </div>

</div>

    </>
  )   
}