import styled, { keyframes } from "styled-components";

interface KeyboardLayoutInterface {
  show: boolean;
}

const KeyboardPopUpAnimation = keyframes`
  0% {
    transform: translateY(105%);
  }
  100% {
    transform: translateY(0);
  }
`;

export const KeyboardLayout = styled.div<KeyboardLayoutInterface>`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ecf8f7;

  transition: 2s all;

  animation: ${(props) => (props.show ? KeyboardPopUpAnimation : 0)};
  animation-duration: 2s;
`;

KeyboardLayout.displayName = "KeyboardLayout";

export const KeyboardButtonsLayout = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;

  transition: 2s all;
`;
