import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import logo from "../../assets/images/logo.jpg";
import Button from "../../components/Button/Button";
import { Link, useNavigate } from "react-router-dom";
import { decode } from "html-entities";
import Spinner from "../../components/Spinner/Spinner";
import QuestionsContext from "../../QuestionsContext";
import AnswersContext from "../../AnswersContext";

const QuizPage = () => {
  // states
  const [questionsState, setQuestionsState] = useState([]);
  let [questionNumberState, setQuestionNumberState] = useState(1);
  const [questionState, setQuestionState] = useState("");
  const [answersState, setAnswersState] = useState([]);

  const navigate = useNavigate();

  // context
  const { questionsContext, setQuestionsContext } =
    useContext(QuestionsContext);

  const { answersContext, setAnswersContext } = useContext(AnswersContext);

  const answerHandler = (e) => {
    if (questionNumberState <= 15) {
      const { answer } = e.target.dataset;

      // add number to answers state array
      setAnswersState([...answersState, answer]);

      // set current question
      setQuestionState(questionsState[questionNumberState - 1]);
    }

    // increase the question number
    if (questionNumberState <= 16)
      setQuestionNumberState(++questionNumberState);
  };

  useEffect(() => {
    //   get questions from API
    const getQuestions = async () => {
      const results = await axios.get(
        `https://opentdb.com/api.php?amount=15&difficulty=hard&type=boolean`
      );

      const questions = results.data.results;

      //   set questions in the question state
      setQuestionsState(questions);

      //   get current questions
      setQuestionState(questions[questionNumberState - 1]);
    };

    getQuestions();
  }, []);

  useEffect(() => {
    // if  answered questions are 15 show results
    if (questionNumberState > 15) return navigate("/results");

    // set context value
    setQuestionsContext(questionsState);
    setAnswersContext(answersState);
  }, [
    questionNumberState,
    navigate,
    answersState,
    questionsState,
    setAnswersContext,
    setQuestionsContext,
  ]);

  // if questions have not been selected from rest api display spinner if it has display question
  return !questionState.question && questionsState.length < 1 ? (
    <Spinner />
  ) : (
    <Container>
      <Card>
        <img className="logo" src={logo} alt="" />
        <h3 className="mt-3 row justify-content-sb">
          <Link to="/" className="text-secondary">
            <i className="fa-solid fa-arrow-left"></i> Stop Quiz
          </Link>
          <div>
            Question:{" "}
            <span>
              <span className="text-secondary">{questionNumberState}</span>/
              <span>15</span>{" "}
            </span>
          </div>
        </h3>
        <h2 className="text-center">{questionState.category}</h2>
        <p className="text-grey">{decode(questionState.question)}</p>
        <Button
          to="#"
          bgoutline="var(--secondary-color)"
          width="100%"
          data-answer="True"
          onClick={answerHandler}
        >
          True
        </Button>
        <Button
          to="#"
          bgoutline="var(--danger-color)"
          width="100%"
          onClick={answerHandler}
          data-answer="False"
        >
          False
        </Button>
      </Card>
    </Container>
  );
};

export default QuizPage;
