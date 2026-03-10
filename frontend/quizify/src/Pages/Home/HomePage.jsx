import { Navbar ,QuizCard } from "../../components/index.js";
import { useEffect , Fragment , useState } from "react";
import axios from "axios";


export const HomePage = () => {
        const [categories , setCategories] = useState([]);
    useEffect(() => {
        (async()=>{
            try{
            const  { data : quizzes }  = await axios.get("https://quizzify-uld1.onrender.com/categories");
            setCategories(quizzes);
            
            }
            catch(err){
                console.log(err);
            }
        })();

    }, []);
    return(
        <>
        
        <div className="min-h-screen bg-zinc-950 p-10">
         
            <div className="p-10 pt-16">
             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
           {
             categories.length > 0 &&categories.map((category)=>(
                <QuizCard key = {category.id} quizCategory={category}/>
            ))
           }
        </div>
            </div>
           
        </div>
        </>
    )
};