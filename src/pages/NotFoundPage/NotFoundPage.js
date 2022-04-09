import Button from "../../components/Button/Button";

const NotFoundPage = () => {
  return (
    <div className="text-center">
      <h1 className="text-secondary display-1">404</h1>
      <h2>ERROR 404 - PAGE NOT FOUND</h2>
      <p>Page you requested for is not found</p>
      <Button to="/" bg="var(--secondary-color)">
        <i className="fa-solid fa-arrow-left"></i> GO BACK HOME
      </Button>
    </div>
  );
};

export default NotFoundPage;
