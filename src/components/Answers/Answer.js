import Card from "../../components/Card/Card";
import { decode } from "html-entities";
import styled from "styled-components";

const Icon = styled.i`
  background: ${(props) => (props.bg ? props.bg : "var(--light-grey-color)")};
  color: ${(props) => (props.bg ? "var(--white-color)" : null)};
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-weight: bold;
  font-size: 1.8rem;
  margin-right: 1rem;
`;

const Answer = (props) => {
  // destructure props
  const { question, answer, number, correctAnswer } = props;

  const icon = correctAnswer === answer ? "fa-check" : "fa-times";

  const bg = correctAnswer === answer ? "green" : "red";

  return (
    <Card className="mb-1 row">
      <div>
        <Icon className={`fa-solid ${icon}`} bg={bg}></Icon>
      </div>
      <div>
        <h5>Question {number}</h5>
        <p className="text-grey">{decode(question)}</p>
        <p>
          <strong>
            <span className="text-secondary">Answer:</span> {answer}
          </strong>
        </p>
      </div>
    </Card>
  );
};

export default Answer;
