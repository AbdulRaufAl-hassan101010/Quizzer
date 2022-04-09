import Container from "../../components/Container/Container";
import Card from "../../components/Card/Card";
import logo from "../../assets/images/logo.jpg";
import Button from "../../components/Button/Button";

const HomePage = () => {
  return (
    <Container>
      <Card className="text-center">
        <img className="logo" src={logo} alt="" />
        <h1 className="mt-3">Welcome To Quizzer</h1>
        <p>
          Can You Score <strong className="text-secondary">100%</strong>?
        </p>

        <Button to="/quiz" bg="var(--secondary-color)">
          BEGIN <i className="fa-solid fa-arrow-right"></i>
        </Button>
      </Card>
    </Container>
  );
};

export default HomePage;
