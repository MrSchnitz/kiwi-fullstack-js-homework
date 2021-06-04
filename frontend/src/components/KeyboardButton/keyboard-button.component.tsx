import React from "react";
import {Button} from "@kiwicom/orbit-components/lib";
import {Props} from "@kiwicom/orbit-components/lib/Button";
import {ButtonContent, ButtonLetters, ButtonNumber} from "./keyboard.styles";

export interface KeyboardButtonProps {
  number: number;
  onClick: (number: number) => void;
  charArray?: string[];
  props?: Props;
  isDelButton?: boolean;
}

const KeyboardButton: React.FC<KeyboardButtonProps> = ({
  number,
  charArray,
  onClick,
  props,
  isDelButton,
}: KeyboardButtonProps) => {
  return (
    <Button onClick={() => onClick(number)} {...props}>
      <ButtonContent>
        {!isDelButton && <ButtonNumber>{number}</ButtonNumber>}
        {charArray && (
          <ButtonLetters>
            {charArray.toString().replace(/,/g, "")}
          </ButtonLetters>
        )}
      </ButtonContent>
    </Button>
  );
};

export default KeyboardButton;
