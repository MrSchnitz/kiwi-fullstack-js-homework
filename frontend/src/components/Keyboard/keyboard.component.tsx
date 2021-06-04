import React from "react";
import KeyboardButton from "../KeyboardButton/keyboard-button.component";
import { ChevronDoubleLeft } from "@kiwicom/orbit-components/lib/icons";
import { KeyboardButtonsLayout, KeyboardLayout } from "./keyboard.styles";

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

export default Keyboard;
