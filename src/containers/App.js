import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "../pages/HomePage/HomePage";
import QuizPage from "../pages/QuizPage/QuizPage";
import ResultsPage from "../pages/ResultsPage/ResultsPage";
import QuestionsContext from "../QuestionsContext";
import AnswersContext from "../AnswersContext";
import NotFoundPage from "../pages/NotFoundPage/NotFoundPage";

const App = () => {
  const [questionsContext, setQuestionsContext] = useState([]);
  const [answersContext, setAnswersContext] = useState([]);

  return (
    <QuestionsContext.Provider
      value={{ questionsContext, setQuestionsContext }}
    >
      <AnswersContext.Provider value={{ answersContext, setAnswersContext }}>
        <div className="app">
          <BrowserRouter>
            <Routes>
              <Route path="/">
                <Route index element={<HomePage />} />
                <Route path="quiz" element={<QuizPage />} />
                <Route path="results" element={<ResultsPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </div>
      </AnswersContext.Provider>
    </QuestionsContext.Provider>
  );
};

export default App;
