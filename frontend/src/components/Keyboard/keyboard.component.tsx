import React from "react";
import styled, { keyframes } from "styled-components";
import KeyboardButton from "../KeyboardButton/keyboard-button.component";
import { ChevronDoubleLeft } from "@kiwicom/orbit-components/lib/icons";

export interface KeyboardProps {
  onKeyPressed: (key: number) => void;
  onDeleteChar: () => void;
  show: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  onKeyPressed,
  onDeleteChar,
  show,
}: KeyboardProps) => {
  const renderButtons = (
    <>
      <KeyboardButton number={1} charArray={[""]} onClick={onKeyPressed} />
      <KeyboardButton
        number={2}
        charArray={["a", "b", "c"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={3}
        charArray={["d", "e", "f"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={4}
        charArray={["g", "h", "i"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={5}
        charArray={["j", "k", "l"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={6}
        charArray={["m", "n", "o"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={7}
        charArray={["p", "q", "r", "s"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={8}
        charArray={["t", "u", "v"]}
        onClick={onKeyPressed}
      />
      <KeyboardButton
        number={9}
        charArray={["w", "x", "y", "z"]}
        onClick={onKeyPressed}
      />
    </>
  );

  return (
    <KeyboardLayout show={show}>
      <KeyboardButton
        number={99}
        charArray={["delete"]}
        onClick={() => onDeleteChar()}
        isDelButton={true}
        props={{
          width: "98%",
          iconLeft: <ChevronDoubleLeft customColor={"#fff"} />,
          iconRight: <ChevronDoubleLeft customColor={"#fff"} />,
        }}
      />
      <KeyboardButtonsLayout>{renderButtons}</KeyboardButtonsLayout>
    </KeyboardLayout>
  );
};

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

const KeyboardLayout = styled.div<KeyboardLayoutInterface>`
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

const KeyboardButtonsLayout = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;

  transition: 2s all;
`;

export default Keyboard;
