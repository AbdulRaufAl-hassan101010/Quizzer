import { useContext } from "react";
import styled from "styled-components";
import AnswersContext from "../../AnswersContext";
import QuestionsContext from "../../QuestionsContext";
import Answer from "./Answer";

const Div = styled.div`
  height: 30rem;
  overflow-x: hidden;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }

  &::-webkit-scrollbar-track {
    box-shadow: inset 0 0 0.5rem rgba(0, 0, 0, 0.3);
    border-radius: 0.5rem;
  }

  &::-webkit-scrollbar-thumb {
    background-color: var(--secondary-color);
    outline: none;
    border: none;
    border-radius: 0.5rem;
  }
`;

const Answers = () => {
  // destructure props
  const questions = useContext(QuestionsContext);
  const answers = useContext(AnswersContext);

  return (
    <Div>
      {questions.questionsContext.map((question, index) => {
        return (
          <Answer
            key={Math.random() * index}
            number={index + 1}
            question={question.question}
            answer={answers.answersContext[index]}
            correctAnswer={question.correct_answer}
          />
        );
      })}
    </Div>
  );
};

export default Answers;
