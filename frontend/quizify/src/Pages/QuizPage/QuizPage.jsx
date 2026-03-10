import { useEffect } from "react"
import { QuestionAnswer } from "../../components/index"
import { useQuiz } from "../../context/quiz-context";
import axios from "axios";


export const QuizPage = () => {
  const { quizCategory, quizData, quizDispatch } = useQuiz();
  console.log("quiz page");

  useEffect(() => {

    const fetchQuiz = async () => {
      try {

        const {  data : data }= await axios.get(
          "https://quizzify-uld1.onrender.com/quizzes",
          {
            headers: {
              authorization: localStorage.getItem("token")
            }
          }
        );
        console.log("api running")
        console.log (data);
        const filterdata =
          data &&
          data.length > 0 &&
          data.filter(({ category }) => category === quizCategory);

        if (filterdata && filterdata.length > 0) {
          quizDispatch({
            action: "SET_QUIZ",
            payload: filterdata
          });

          localStorage.setItem("quiz", JSON.stringify(filterdata));
        }

      } catch (err) {
        console.log(err);
      }
    };

    fetchQuiz(); // 🔥 CALLING THE FUNCTION

  }, []);

  return (
    <div className="flex justify-center items-center h-screen bg-zinc-950">
      
      {quizData && quizData.length > 0 && (
        <QuestionAnswer quizData={quizData} />
      )}
    </div>
  );
};




