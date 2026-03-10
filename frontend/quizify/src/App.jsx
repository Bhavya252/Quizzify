
import { Navbar } from "./components/index.js";
import { HomePage, LogIn ,QuizPage ,Result } from "./Pages/index.js";
import { Routes, Route } from "react-router-dom";
// import QuizPage from "./Pages/QuizPage/QuizPage.jsx";
// import './App.css'

function App() {
  return (
    <>
      <div className="min-h-screen bg-black text-white">
        <Navbar />
       
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/auth/login" element={<LogIn />} />
          <Route path ="/quiz" element ={<QuizPage/>} />
          <Route path ="/result" element ={<Result/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;
