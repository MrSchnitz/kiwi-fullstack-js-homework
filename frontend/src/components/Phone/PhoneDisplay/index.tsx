import React from "react";
import { Textarea } from "@kiwicom/orbit-components/lib";
import styled, {keyframes} from "styled-components";

interface PhoneDisplayProps {
  text: string;
  onChange?: (value: string) => void;
}

const PhoneDisplay: React.FC<PhoneDisplayProps> = ({
  text,
  onChange,
}: PhoneDisplayProps) => {
  return (
    <TextareaLayout>
      <Textarea
        size={"normal"}
        readOnly={true}
        fullHeight={true}
        placeholder="Type something..."
        value={text.length > 0 ? text : "Type something..."}
      />
    </TextareaLayout>
  );
};

const TextareaLayoutAnimation = keyframes`
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
`;

const TextareaLayout = styled.div`
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
    // background-color: #ECF8F7;
  }
`;

export default PhoneDisplay;
