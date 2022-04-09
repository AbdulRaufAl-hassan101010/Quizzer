import styled from "styled-components";

const Spinner = styled.div`
  border: 0.5rem solid var(--secondary-color);
  border-top: 0.5rem solid var(--white-color);
  border-radius: 50%;
  width: 10rem;
  height: 10rem;
  animation: spin 2s linear infinite;
  z-index: 200;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export default Spinner;
