import React from "react";
import styled, {keyframes} from "styled-components";
import KeyboardButton from "../KeyboardButton/keyboard-button.component";
import {ChevronDoubleLeft} from "@kiwicom/orbit-components/lib/icons";

interface KeyboardProps {
  onKeyPressed: (key: number) => void;
  onDeleteChar: () => void;
  show: boolean;
}

const Keyboard: React.FC<KeyboardProps> = ({
  onKeyPressed,
  onDeleteChar,
  show,
}: KeyboardProps) => {
  const handleClick = (number: number) => onKeyPressed(number);

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
      <KeyboardButtonsLayout>
        <KeyboardButton number={1} charArray={[""]} onClick={handleClick} />
        <KeyboardButton
          number={2}
          charArray={["a", "b", "c"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={3}
          charArray={["d", "e", "f"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={4}
          charArray={["g", "h", "i"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={5}
          charArray={["j", "k", "l"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={6}
          charArray={["m", "n", "o"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={7}
          charArray={["p", "q", "r", "s"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={8}
          charArray={["t", "u", "v"]}
          onClick={handleClick}
        />
        <KeyboardButton
          number={9}
          charArray={["w", "x", "y", "z"]}
          onClick={handleClick}
        />
      </KeyboardButtonsLayout>
    </KeyboardLayout>
  );
};

interface KayboardLayoutInterface {
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

const KeyboardLayout = styled.div<KayboardLayoutInterface>`
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

const KeyboardButtonsLayout = styled.div`
  width: 100%;
  padding: 0.3rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 0.3rem;

  transition: 2s all;
`;

export default Keyboard;
