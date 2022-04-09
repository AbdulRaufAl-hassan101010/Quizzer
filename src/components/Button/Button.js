import styled from "styled-components";
import { Link } from "react-router-dom";

const Button = styled(Link)`
  padding: 0.8rem 1.6rem;
  outline: none;
  border-radius: 0.5rem;
  font-weight: bold;
  background: var(--grey-color);
  display: inline-block;
  margin-top: 0.5rem;
  margin-bottom: 1rem 0;
  border: ${(props) =>
    props.bgoutline ? `0.1rem solid ${props.bgoutline}` : "none"};
  background: ${(props) => props.bg};
  color: ${(props) => (props.bg ? "var(--white-color)" : null)};
  width: ${(props) => (props.width ? props.width : null)};

  &:hover {
    background: ${(props) => (props.bgoutline ? `${props.bgoutline}` : null)};
    color: ${(props) => (props.bgoutline ? "var(--white-color)" : null)};
  }
`;

export default Button;
