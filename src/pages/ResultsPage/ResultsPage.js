import { useContext, useEffect } from "react";
import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import logo from "../../assets/images/logo.jpg";
import Button from "../../components/Button/Button";
import Answers from "../../components/Answers/Answers";
import AnswersContext from "../../AnswersContext";
import QuestionsContext from "../../QuestionsContext";
import { useNavigate } from "react-router-dom";

const ResultsPage = () => {
  // destructure props
  const questions = useContext(QuestionsContext);
  const answers = useContext(AnswersContext);

  const navigate = useNavigate();

  //   calculate result
  const scored = questions.questionsContext.reduce((acc, cur, index) => {
    if (!cur) return 0;

    if (cur.correct_answer === answers.answersContext[index]) return ++acc;

    return acc;
  }, 0);

  useEffect(() => {
    //   navigate to home page if user tries to normally visit this page
    if (questions.questionsContext.length < 1) return navigate("/");
  }, []);

  return (
    <Container>
      <Card>
        <img className="logo" src={logo} alt="" />
        <h2 className="mt-3 text-center">
          You Scored <span className="text-secondary">{`${scored}/15`}</span>
        </h2>
        <Answers />
        <Button to="/" bg="var(--secondary-color)">
          <i className="fa-solid fa-home"></i> Home
        </Button>
        <Button to="/quiz" className="ml-1">
          <i className="fa-solid fa-arrow-rotate-right"></i> Try Again
        </Button>
      </Card>
    </Container>
  );
};

export default ResultsPage;
