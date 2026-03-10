import { useNavigate} from "react-router-dom";
import { useQuiz } from "../../context/quiz-context";


export const QuizCard = ({ quizCategory}) => {
  const { id,category, image } = quizCategory;
  const navigate = useNavigate();
  const{ quizDispatch } = useQuiz();
  

  const handleClick = () => {
     const token = localStorage.getItem("token"); 
     if(token){
      quizDispatch(
        {action:"QUIZ_CATEGORY", 
          payload: category});

      localStorage.setItem("category", category);

      navigate('/quiz');
     }
     else{
      navigate('/auth/login');
     }

    
  }

  return (
    <>
      <div class="bg-zinc-900 block max-w-sm border border-default rounded-base shadow-xs">
        <img class="rounded-t-base" src={image} alt={category} />
        <div className="p-6 flex flex-col items-center gap-4">
          <span className="bg-purple-600/20 border border-purple-500 text-purple-300 text-sm font-semibold px-3 py-1 rounded-md">
            {category}
          </span>

          <button onClick ={handleClick} className="bg-purple-600 hover:bg-purple-500 px-6 py-2 rounded-xl transition-all duration-200 hover:scale-105 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
            Play Now
          </button>
        </div>
      </div>
    </>
  );
};
