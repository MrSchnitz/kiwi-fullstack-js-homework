import styled, { keyframes } from "styled-components";

const TextareaLayoutAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

export const TextareaLayout = styled.div`
  height: 100%;
  width: 100%;
  font-size: 3rem;

  animation: ${TextareaLayoutAnimation} 4s ease;

  textarea {
    font-size: 2.5rem;
    padding: 1.5rem;
    border: none;
    outline: none;
    border-color: transparent;
    background-color: #d6ead9;
  }
`;
