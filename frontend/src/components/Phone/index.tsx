import React from "react";
import styled from "styled-components";
import Keyboard from "../Keyboard";
import PhoneDisplay from "./PhoneDisplay";
import PhoneLayout from "./PhoneLayout";

interface PhoneProps {
  displayText: string;
  onKeyPressed: (key: number) => void;
  onDeleteChar: () => void;
}

const Phone: React.FC<PhoneProps> = ({
  displayText,
  onKeyPressed,
  onDeleteChar,
}: PhoneProps) => {

  return (
    <PhoneLayout>
      <PhoneContent>
        <PhoneDisplay text={displayText} />
        <Keyboard
          onKeyPressed={onKeyPressed}
          onDeleteChar={onDeleteChar}
          show={true}
        />
      </PhoneContent>
    </PhoneLayout>
  );
};

const PhoneContent = styled.div`
  height: 100%;
  width: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  // justify-content: center;
  align-items: center;
`;

export default Phone;
