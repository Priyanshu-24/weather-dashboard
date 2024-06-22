import styled, { keyframes } from "styled-components";

const spin = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const Spinner = styled.div`
  margin: 1.25rem auto;
  border: 0.25em solid rgba(0, 0, 0, 0.1);
  border-left-color: #000;
  border-radius: 50%;
  width: 2.5em;
  height: 2.5em;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = () => <Spinner />;

export default LoadingSpinner;
